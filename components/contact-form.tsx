"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  service: z.string().min(1, "Choose a service area."),
  message: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters about your project.")
    .max(2000, "Keep your message under 2,000 characters."),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [notice, setNotice] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });
  const submit = async () => {
    setNotice(
      "Your details are valid, but the enquiry endpoint is not connected yet. Your message has not been sent.",
    );
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-row">
        <label>
          Name
          <input
            {...register("name")}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="field-error">{errors.name.message}</span>}
        </label>
        <label>
          Email
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="field-error">{errors.email.message}</span>}
        </label>
      </div>
      <label>
        What would you like to build?
        <select {...register("service")} defaultValue="" aria-invalid={!!errors.service}>
          <option value="" disabled>
            Select a service area
          </option>
          <option>Website design & development</option>
          <option>Custom software</option>
          <option>AI & machine learning</option>
          <option>Chatbots & voice AI</option>
          <option>Mobile applications</option>
          <option>NFC & smart integrations</option>
          <option>UI/UX & product design</option>
          <option>Cloud, APIs & automation</option>
          <option>Not sure yet</option>
        </select>
        {errors.service && <span className="field-error">{errors.service.message}</span>}
      </label>
      <label>
        Tell us about your project
        <textarea
          {...register("message")}
          rows={5}
          placeholder="A little about your idea, goals and what you need help with..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="field-error">{errors.message.message}</span>}
      </label>
      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Checking details…" : "Send project enquiry"} <ArrowRight size={17} />
      </button>
      {notice && (
        <p role="status" className="form-notice">
          {notice}
        </p>
      )}
      <p className="form-privacy">This form is not connected to a submission service yet.</p>
    </form>
  );
}
