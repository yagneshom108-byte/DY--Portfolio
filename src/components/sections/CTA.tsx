import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_13t3wp6",     // ← Replace
        "template_bzpbn7l",    // ← Replace
        form.current,
        "TdAdG3-oCQuqMp8jq"      // ← Replace
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
        },
        () => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-glow-lg"
          style={{
            background:
              "linear-gradient(135deg, #2b0d00 0%, #3a1400 40%, #1a0700 100%)",
          }}
        >
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/20 blur-[150px] rounded-full -z-10 animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Let's Talk
              </span>

              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                START <br />
                <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(255,200,0,0.6)]">
                  PROJECT
                </span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-lg">
                Have a vision? Let’s bring it to life with cinematic precision and high-impact storytelling.
              </p>

              <div className="glass p-6 rounded-2xl border border-white/10">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  Email Address
                </p>
                <p className="text-lg font-bold text-white">
                  yagnesh6650@gmail.com
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  Location
                </p>
                <p className="text-lg font-bold text-white">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass p-10 rounded-[2.5rem] border border-white/10 flex flex-col gap-6 backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 outline-none"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-yellow-400 outline-none"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white resize-none focus:border-yellow-400 outline-none"
              />

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black h-14 text-lg font-black rounded-xl flex items-center justify-center gap-3"
              >
                {loading ? "Sending..." : "START YOUR PROJECT"}
                <Send size={20} />
              </Button>

              {success && (
                <p className="text-green-400 text-center font-semibold">
                  ✅ Message Sent Successfully!
                </p>
              )}
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
};