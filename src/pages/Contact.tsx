import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8ar2u3r',
        'template_ovjo0gj',
        form.current!,
        'dxNZAaHexZxryb3ZM'
      )
      .then(
        () => setSent(true),
        (error) => {
          console.error('FAILED...', error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Contact Me
      </h2>

      {sent ? (
        <p className="text-center text-green-600 text-lg font-semibold">Message sent successfully! 🎉</p>
      ) : (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;