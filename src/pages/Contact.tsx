import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      const form = document.createElement('form');
      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      await emailjs.sendForm(
        'service_8ar2u3r',
        'template_ovjo0gj',
        form,
        'dxNZAaHexZxryb3ZM'
      );

      toast.success('Message sent successfully! 🎉');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            rows={5}
            {...register('message', { required: 'Message is required' })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-md text-white transition ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;