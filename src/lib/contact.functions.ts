import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  message: z.string().trim().min(1, "Please enter a message").max(2000, "Message must be under 2000 characters"),
  // Honeypot: invisible to humans, filled by bots. Any value is accepted here
  // and silently discarded in the handler, so bots see a fake success.
  company: z.string().max(200).optional(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled → bot. Pretend success, store nothing.
    if (data.company) {
      return { ok: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (error) {
      console.error("contact_submissions insert failed", error);
      throw new Error("Your message could not be sent. Please try again in a moment.");
    }

    return { ok: true };
  });
