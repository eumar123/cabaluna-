import { ContactFormClient } from "@/components/features/contact/ContactFormClient";
import { ContactHeroSection } from "@/components/features/contact/ContactHeroSection";
import { ContactInfoSection } from "@/components/features/contact/ContactInfoSection";

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormClient />
    </>
  );
}
