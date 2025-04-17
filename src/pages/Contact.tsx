import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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
    <section className="min-h-screen px-6 py-16 bg-bg text-text flex justify-center">
      <div className="max-w-xl bg-surface shadow-2xl rounded-3xl px-10 py-14 md:px-16 space-y-12 transition-all duration-300">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-heading">Let's talk</h1>
        <p className="text-center text-subtext max-w-md mx-auto">
          Feel free to reach out using the form below — whether it's about work, collaboration, or just to say hi.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.name && <p className="text-sm text-error">{errors.name.message}</p>}
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
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {errors.email && <p className="text-sm text-error">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows={6}
              {...register('message', { required: 'Message is required' })}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text placeholder:text-subtext focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
            {errors.message && <p className="text-sm text-error">{errors.message.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ${
                isSubmitting
                  ? 'border-border text-border cursor-not-allowed bg-transparent'
                  : 'border-accent text-accent hover:bg-accent hover:text-white focus:ring-2 focus:ring-accent-hover'
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