import React from "react";
import  { useState, useEffect } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({ fullname: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedMessages;

    if (editingIndex !== null) {
      updatedMessages = messages.map((msg, index) => (index === editingIndex ? formData : msg));
      setEditingIndex(null);
    } else {
      updatedMessages = [...messages, formData];
    }

    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    setFormData({ fullname: "", email: "", message: "" });
  };

  const handleEdit = (index) => {
    setFormData(messages[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className="form-btn" type="submit">
          <span>{editingIndex !== null ? "Update Message" : "Send Message"}</span>
        </button>
      </form>

      <div>
        <h3>Saved Messages</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <p><strong>{msg.fullname}</strong> ({msg.email}): {msg.message}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};






const Contact = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7438.669656511395!2d72.89878615954031!3d21.218567268536585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045882435e545%3A0xd6f93d3d2fa5d1b5!2sSimada%20Gam%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1739692617314!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
