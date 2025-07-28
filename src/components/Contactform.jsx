// ContactForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/button/filled-tonal-button.js";


const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_l98j5kk",      // replace
        "template_mr7w70r",     // replace
        form.current,
        "wSXLIvi91GqIa5cWA"       // replace
      )
      .then(
        (result) => {
          toast.success("Message Sent!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p className="font-medium mb-5 text-[var(--md-sys-color-primary)] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-[var(--md-sys-color-on-surface)] rounded-lg border border-[var(--md-sys-color-outline)] p-3 lg:p-5">
        <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
           Looking for Exciting Tech Roles !..
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <md-filled-text-field
            label="Your Name"
            name="name"
            required
            maxLength="100"
            class="w-full"
          />
          <md-filled-text-field
            label="Your Email"
            name="email"
            type="email"
            required
            maxLength="100"
            class="w-full"
          />
          <md-filled-text-field
            label="Your Message"
            name="message"
            rows="4"
            required
            class="w-full"
          />

          <div className="flex flex-col items-center gap-3">
            <md-filled-tonal-button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <TbMailForward slot="icon" size={20} />
                </>
              )}
            </md-filled-tonal-button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
