import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import "../index.css";


interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

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

      toast.success('Thanks! Your message was sent. 📬');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Oops! Something went wrong.');
    }
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-gray-950 text-gray-800 dark:text-white flex justify-center">
      <div className="max-w-xl bg-white dark:bg-gray-900 shadow-2xl rounded-3xl px-10 py-14 md:px-16 space-y-12 transition-all duration-300">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">Let's talk</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
          Feel free to reach out using the form below — whether it's about work, collaboration, or just to say hi.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-semibold mb-6">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white mb-6"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows={6}
              {...register('message', { required: 'Message is required' })}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white resize-none"
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white text-lg transition-colors duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;