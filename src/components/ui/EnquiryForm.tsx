import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import {
  enquirySchema,
  type EnquiryFormData,
  PROJECT_TYPE_OPTIONS,
  BUDGET_OPTIONS,
  CONTACT_METHOD_OPTIONS,
} from '../../schemas/enquiry';
import { BUSINESS, buildWhatsAppUrl } from '../../data/business';

interface EnquiryFormProps {
  preselectedService?: string;
  compact?: boolean;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error' | 'db-error';

export default function EnquiryForm({ preselectedService, compact = false }: EnquiryFormProps) {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [savedData, setSavedData] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      projectType: preselectedService as EnquiryFormData['projectType'] || undefined,
    },
  });

  const buildFallbackWhatsApp = (data: EnquiryFormData) => {
    const projectLabel = PROJECT_TYPE_OPTIONS.find(o => o.value === data.projectType)?.label || data.projectType;
    const msg = `Hello Jagdamba Associates, my name is ${data.name}. I am interested in: ${projectLabel}. My phone: ${data.phone}. ${data.message ? 'Additional info: ' + data.message : ''} Please contact me.`;
    return buildWhatsAppUrl(msg);
  };

  const onSubmit = async (data: EnquiryFormData) => {
    // Honeypot check
    if (data.website) return;

    setSavedData(data);
    setStatus('loading');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        reset();
      } else if (res.status === 503) {
        // Database unavailable
        setStatus('db-error');
      } else {
        const body = await res.json().catch(() => ({}));
        console.error('Submission error:', body);
        setStatus('error');
      }
    } catch {
      // Network error or backend not running
      setStatus('db-error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-12 px-6">
        <div className="w-14 h-14 rounded-full bg-[#F7F4EF] flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-green-600" />
        </div>
        <h3
          className="text-2xl font-medium text-[#242421] mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Enquiry Received
        </h3>
        <p className="text-[#6B6257] text-sm mb-6 max-w-sm">
          Thank you for reaching out. We will get back to you shortly on the contact details you provided.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* DB Error / offline fallback */}
      {(status === 'error' || status === 'db-error') && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 flex gap-3">
          <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800">
              {status === 'db-error'
                ? 'Our form is temporarily unavailable.'
                : 'Something went wrong. Please try again.'}
            </p>
            {savedData && status === 'db-error' && (
              <a
                href={buildFallbackWhatsApp(savedData)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 btn-whatsapp text-xs"
                style={{ padding: '0.5rem 1rem' }}
              >
                <MessageCircle size={14} />
                Continue via WhatsApp instead
              </a>
            )}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Project enquiry form"
      >
        {/* Honeypot — hidden from users */}
        <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('website')}
          />
        </div>

        <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          {/* Name */}
          <div>
            <label htmlFor="enquiry-name" className="form-label">
              Full Name <span aria-label="required">*</span>
            </label>
            <input
              id="enquiry-name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
              {...register('name')}
            />
            {errors.name && (
              <p id="name-error" className="form-error" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="enquiry-phone" className="form-label">
              Phone Number <span aria-label="required">*</span>
            </label>
            <input
              id="enquiry-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className={`form-input ${errors.phone ? 'error' : ''}`}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              aria-invalid={!!errors.phone}
              {...register('phone')}
            />
            {errors.phone && (
              <p id="phone-error" className="form-error" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          {!compact && (
            <div>
              <label htmlFor="enquiry-email" className="form-label">
                Email Address <span className="text-[#9A8E84] normal-case tracking-normal" style={{fontSize:'0.7rem'}}>(optional)</span>
              </label>
              <input
                id="enquiry-email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                className={`form-input ${errors.email ? 'error' : ''}`}
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
                {...register('email')}
              />
              {errors.email && (
                <p id="email-error" className="form-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}

          {/* Project Type */}
          <div className={compact ? '' : 'md:col-span-1'}>
            <label htmlFor="enquiry-project-type" className="form-label">
              Project Type <span aria-label="required">*</span>
            </label>
            <select
              id="enquiry-project-type"
              className={`form-input ${errors.projectType ? 'error' : ''}`}
              aria-describedby={errors.projectType ? 'project-type-error' : undefined}
              aria-invalid={!!errors.projectType}
              {...register('projectType')}
            >
              <option value="">Select project type</option>
              {PROJECT_TYPE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p id="project-type-error" className="form-error" role="alert">
                {errors.projectType.message}
              </p>
            )}
          </div>

          {/* Budget */}
          {!compact && (
            <div>
              <label htmlFor="enquiry-budget" className="form-label">
                Approximate Budget <span className="text-[#9A8E84] normal-case tracking-normal" style={{fontSize:'0.7rem'}}>(optional)</span>
              </label>
              <select
                id="enquiry-budget"
                className="form-input"
                {...register('budgetRange')}
              >
                <option value="">Select budget range</option>
                {BUDGET_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Contact Method */}
          {!compact && (
            <div>
              <label htmlFor="enquiry-contact-method" className="form-label">
                Preferred Contact Method <span className="text-[#9A8E84] normal-case tracking-normal" style={{fontSize:'0.7rem'}}>(optional)</span>
              </label>
              <select
                id="enquiry-contact-method"
                className="form-input"
                {...register('contactMethod')}
              >
                <option value="">No preference</option>
                {CONTACT_METHOD_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Message */}
          <div className={compact ? '' : 'md:col-span-2'}>
            <label htmlFor="enquiry-message" className="form-label">
              Tell Us About Your Project <span className="text-[#9A8E84] normal-case tracking-normal" style={{fontSize:'0.7rem'}}>(optional)</span>
            </label>
            <textarea
              id="enquiry-message"
              rows={compact ? 3 : 4}
              placeholder="Describe your space, style preferences, key requirements, or any questions you have..."
              className={`form-input resize-none ${errors.message ? 'error' : ''}`}
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
              {...register('message')}
            />
            {errors.message && (
              <p id="message-error" className="form-error" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Privacy notice */}
        <p className="text-xs text-[#9A8E84] mt-4 leading-relaxed">
          Your information is used only to respond to your enquiry. We do not share your details with third parties.
        </p>

        {/* Submit */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary flex-1 justify-center"
            aria-live="polite"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              'Send Enquiry'
            )}
          </button>
          <a
            href={`https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent('Hello Jagdamba Associates, I am interested in your interior design services. Please let me know the next steps.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center sm:flex-none"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
