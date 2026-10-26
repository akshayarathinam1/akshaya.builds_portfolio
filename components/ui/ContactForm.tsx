"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Loader2, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim() || !EMAIL_REGEX.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.subject.trim())
    errors.subject = "Subject is required.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      // Simulate API call — replace with real fetch to /api/contact
      await new Promise((res) => setTimeout(res, 1400));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-transparent border border-[#DCDCDC] rounded-none px-4 py-3 text-sm text-[#F2F2F2] placeholder-[#F2F2F2]/30 outline-none focus:border-[#F2F2F2] transition-colors duration-200 resize-none";

  const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" as const },
    }),
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 h-full min-h-[340px] text-center"
      >
        <CheckCircle size={48} className="text-[#F2F2F2]" strokeWidth={1.5} />
        <p className="font-display text-2xl font-bold text-[#F2F2F2]">
          Message sent! ✦
        </p>
        <p className="text-sm text-[#F2F2F2]/60 max-w-xs">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs text-[#F2F2F2]/40 underline underline-offset-2 hover:text-[#F2F2F2]/70 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="name"
          className={inputBase}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              id="name-error"
              role="alert"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-[#F2F2F2]/50 mt-1 pl-1"
            >
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email */}
      <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          autoComplete="email"
          className={inputBase}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              id="email-error"
              role="alert"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-[#F2F2F2]/50 mt-1 pl-1"
            >
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subject */}
      <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className={inputBase}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              id="subject-error"
              role="alert"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-[#F2F2F2]/50 mt-1 pl-1"
            >
              {errors.subject}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message */}
      <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hi..."
          rows={5}
          className={inputBase}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              id="message-error"
              role="alert"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-[#F2F2F2]/50 mt-1 pl-1"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submit */}
      <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 bg-[#F2F2F2] text-[#252625] px-6 py-3.5 text-sm font-semibold tracking-wide transition-opacity duration-200 disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={14} />
            </>
          )}
        </motion.button>
        {status === "error" && (
          <p className="text-xs text-[#F2F2F2]/50 mt-2 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </motion.div>
    </form>
  );
}
