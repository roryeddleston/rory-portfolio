import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useRef } from "react";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const startedAt = useRef<number>(Date.now()); // start timer when component mounts

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    // minimum time-to-submit bot check
    const elapsed = Date.now() - startedAt.current;
    if (elapsed < 2500) {
      toast.error("Please take a moment before submitting.");
      return;
    }

    try {
      const form = document.createElement("form");
      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.name = key;
        input.value = String(value ?? "");
        form.appendChild(input);
      });

      await emailjs.sendForm(
        "service_8ar2u3r",
        "template_ovjo0gj",
        form,
        "dxNZAaHexZxryb3ZM"
      );

      toast.success("Thanks! Your message was sent. 📬");
      reset();

      startedAt.current = Date.now(); // reset timer after successful send
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen w-full px-6 pt-28 pb-16 bg-bg text-text flex justify-center lg:pl-20 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl bg-surface rounded-3xl px-10 py-14 md:px-16 space-y-12 transition-all duration-300 border-2 [border-color:var(--accent)]"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center text-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let's talk
        </motion.h1>

        <motion.p
          className="text-center text-subtext max-w-md mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm currently looking for new opportunities. If you have a project in
          mind or just want to chat, feel free to reach out!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.name && (
              <p className="text-sm text-error">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.email && (
              <p className="text-sm text-error">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows={6}
              {...register("message", { required: "Message is required" })}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
            {errors.message && (
              <p className="text-sm text-error">{errors.message.message}</p>
            )}
          </div>

          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
                isSubmitting
                  ? "border-border text-border cursor-not-allowed bg-transparent"
                  : "border-accent text-accent hover:bg-accent hover:text-white focus:ring-2 focus:ring-accent-hover"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
