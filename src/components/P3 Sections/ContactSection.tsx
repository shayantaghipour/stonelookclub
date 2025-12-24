import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // اعتبارسنجی ساده
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_bw8yj5e",   // Service ID
        "template_nn08sb2",  // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "E6EOYWrifzhttrIvB"  // Public Key
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <h2>Contact Us</h2>
        <p>
          Have questions, ideas, or collaborations in mind?
          Send us a message directly.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <span className="contact-success">
              Message sent successfully ✔
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
