"use client";

import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/data";

// Inline brand SVGs
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: socials.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: socials.linkedin },
];

const contactLinks = [
  {
    Icon: Mail,
    label: socials.email,
    href: `https://mail.google.com/mail/?view=cm&to=${socials.email}`,
    external: true,
  },
  {
    Icon: WhatsAppIcon,
    label: "+91 98845 85959",
    href: socials.whatsapp,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Akshaya Rathinam — Full-Stack Developer"
      className="bg-[#F2F2F2] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#252625] inline-block" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#252625]/50">
            Contact
          </span>
        </motion.div>

        {/* Hero headline */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="font-display font-black leading-[1.05] tracking-tight">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#252625]/50">
              {"let's build"}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#252625]">
              something real.
            </span>
          </h2>
          <p className="font-body text-base text-[#252625]/60 mt-6 max-w-lg leading-relaxed">
            Open to freelance web development projects — websites, web
            applications, SaaS products, and MVPs. Get in touch via email or
            WhatsApp to discuss your idea.
          </p>
        </motion.div>

        {/* Two-column row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: description + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#252625]/30">
                find me on
              </span>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#252625]/20 rounded-full hover:bg-[#252625] hover:border-[#252625] hover:text-[#F2F2F2] text-[#252625] text-xs font-semibold transition-colors duration-200"
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            <div className="border-t border-[#252625]/10" />
            {contactLinks.map(({ Icon, label, href, external }, i) => (
              <motion.a
                key={i}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial="rest"
                whileHover="hovered"
                animate="rest"
                className="group flex items-center justify-between py-7 border-b border-[#252625]/10 cursor-pointer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <Icon
                    size={18}
                    className="text-[#252625]/35 group-hover:text-[#252625] transition-colors duration-200 flex-shrink-0"
                  />
                  <motion.span
                    className="font-display text-base sm:text-lg md:text-xl font-semibold text-[#252625]/70 group-hover:text-[#252625] transition-colors duration-200 truncate"
                    variants={{ rest: { x: 0 }, hovered: { x: 6 } }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  >
                    {label}
                  </motion.span>
                </div>
                <motion.div
                  className="ml-4 w-9 h-9 rounded-full border border-[#252625]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#252625] group-hover:border-[#252625] transition-colors duration-200"
                  variants={{ rest: { rotate: 0 }, hovered: { rotate: 45 } }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <ArrowUpRight
                    size={15}
                    className="text-[#252625]/40 group-hover:text-[#F2F2F2] transition-colors duration-200"
                  />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
