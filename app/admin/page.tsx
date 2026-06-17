"use client";

import { useEffect, useState } from "react";

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const [projectForm, setProjectForm] = useState({
    title: "",
    category: "",
    imageUrl: "",
  });

  function login(e: React.FormEvent) {
    e.preventDefault();

    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  }

  async function loadData() {
    const contactsRes = await fetch("/api/contacts");
    const contactsData = await contactsRes.json();
    setContacts(contactsData);

    const projectsRes = await fetch("/api/projects");
    const projectsData = await projectsRes.json();
    setProjects(projectsData);
  }

  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn]);

  async function addProject(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectForm),
    });

    if (response.ok) {
      alert("Project added");
      setProjectForm({
        title: "",
        category: "",
        imageUrl: "",
      });
      loadData();
    }
  }

 

  if (!isLoggedIn) {
    return (
      <main>
        <section>
          <h2>Admin Login</h2>

          <form onSubmit={login}>
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h2>Admin Panel</h2>
        <p>Manage contact submissions and portfolio projects.</p>
      </section>

      <section>
        <h2>Add Project</h2>

        <form onSubmit={addProject}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              placeholder="Project title"
              value={projectForm.title}
              onChange={(e) =>
                setProjectForm({ ...projectForm, title: e.target.value })
              }
            />
          </div>

          <div>
            <label>Category</label>
            <br />
            <input
              type="text"
              placeholder="Project category"
              value={projectForm.category}
              onChange={(e) =>
                setProjectForm({ ...projectForm, category: e.target.value })
              }
            />
          </div>

          <div>
            <label>Image URL</label>
            <br />
            <input
              type="text"
              placeholder="Project image URL"
              value={projectForm.imageUrl}
              onChange={(e) =>
                setProjectForm({ ...projectForm, imageUrl: e.target.value })
              }
            />
          </div>

          <button type="submit">Add Project</button>
        </form>
      </section>

      <section>
        <h2>Portfolio Projects</h2>

        <div className="grid">
          {projects.map((project) => (
            <div key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.category}</p>

              
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Contact Submissions</h2>

        <div className="grid">
          {contacts.map((contact) => (
            <div key={contact.id}>
              <h3>{contact.name}</h3>
              <p>{contact.email}</p>
              <p>{contact.message}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}