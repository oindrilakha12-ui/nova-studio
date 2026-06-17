"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">Nova Studio</p>

          <h1>We design digital brands that feel alive.</h1>

          <p className="hero-text">
            A creative digital agency crafting websites, identities, and
            frontend experiences for modern businesses.
          </p>

          <div className="hero-actions">
            <button type="button">Start a Project</button>
            <a href="#portfolio">View Work</a>
          </div>
        </div>
      </section>

      <section>
        <h2>What We Do</h2>

        <div className="grid">
          <div>
            <h3>Web Design</h3>
            <p>
              We create clean, modern, and responsive website designs that help
              brands make a strong first impression.
            </p>
          </div>

          <div>
            <h3>Front-End Development</h3>
            <p>
              We build fast, interactive, and user-friendly web interfaces using
              modern frontend technologies.
            </p>
          </div>

          <div>
            <h3>Branding</h3>
            <p>
              We design strong visual identities, brand systems, and creative
              assets for businesses.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h2>Selected Work</h2>

        <div className="grid">
          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Aurora Website"
              width="300"
            />
            <h3>Aurora Website</h3>
            <p>Web Design</p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Pulse Dashboard"
              width="300"
            />
            <h3>Pulse Dashboard</h3>
            <p>Front-End Development</p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766"
              alt="Luma Branding"
              width="300"
            />
            <h3>Luma Branding</h3>
            <p>Branding</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Why Brands Choose Us</h2>

        <div className="grid">
          <div>
            <h3>150+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Clients Worldwide</p>
          </div>

          <div>
            <h3>5</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Let’s Build Something</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Message</label>
            <br />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}