import React, { FC, useState } from 'react';

const Contact: FC = () => {
  // Local state for form fields (frontend-only)
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Formspree submit handler
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/meebznww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: firstName,
          email,
          message,
        }),
      });

      if (response.ok) {
        alert('Your message has been sent. I will get back to you shortly.');

        // Reset fields
        setFirstName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  return (
    <div className="page fade-in">
      <section className="section">
        <div className="section-header">
          <h1 className="section-title neon-glow">Contact</h1>
          <p className="section-subtitle">
            Reach out with your idea, your challenge, or simply book a call.
          </p>
        </div>

        {/* Contact Form */}
        <div className="glass-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* First Name */}
            <label className="contact-label">
              First Name
              <input
                type="text"
                className="contact-input"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>

            {/* Email */}
            <label className="contact-label">
              Email
              <input
                type="email"
                className="contact-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            {/* Message */}
            <label className="contact-label">
              Your Message
              <textarea
                className="contact-textarea"
                placeholder="Tell me about your project or the problem you're facing..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>

            {/* Submit */}
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Book a Call Section */}
        <div className="glass-card" style={{ marginTop: '2rem' }}>
          <h2 className="card-title">Prefer a call instead?</h2>
          <p className="card-body">
            If you'd rather talk through your idea live, you can book a call directly.
          </p>

          {/* Replace with your real booking link later */}
          <a
            href="#"
            className="btn btn-secondary"
            style={{ marginTop: '0.5rem' }}
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;