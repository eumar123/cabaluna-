"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="border-t border-[var(--border)] py-12 sm:py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-xl font-semibold text-[var(--foreground)]">
          Sent Me a Message!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="contact-name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="primary">
              Sent Message
            </Button>
            {sent ? (
              <p className="text-sm text-[var(--muted-foreground)]" role="status">
                Thanks — your message is recorded for this demo.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
