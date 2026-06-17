# Nova Studio — Fullstack Developer Assignment

Nova Studio is a fictional digital agency platform built as a fullstack web application. The project includes a responsive landing page, backend API routes, PostgreSQL database integration, contact form submissions, and a basic admin panel.

## Live Demo

https://nova-studio-gold.vercel.app

## GitHub Repository

https://github.com/oindrilakha12-ui/nova-studio

## Tech Stack

* Frontend: Next.js
* Styling: CSS
* Backend: Next.js API Routes
* Database: PostgreSQL
* ORM: Prisma
* Deployment: Vercel
* Version Control: Git and GitHub

## Features

### Public Website

* Hero section for Nova Studio
* Start a Project button that scrolls to the contact form
* Services section
* Portfolio section
* Statistics section
* Contact form
* Responsive layout
* Modern card-based UI
* Hover interactions

### Backend

* API routes for services, projects, stats, contacts, and contact form submission
* PostgreSQL database integration using Prisma
* Contact form data is stored in the database
* Portfolio projects are fetched from backend APIs

### Admin Panel

Admin panel URL:

https://nova-studio-gold.vercel.app/admin

Admin password:

```txt
admin123
```

Admin features:

* Basic password-protected admin page
* View contact form submissions
* View portfolio projects
* Add new portfolio projects

## API Documentation

Base URL:

```txt
https://nova-studio-gold.vercel.app/api
```

### GET `/api/services`

Fetches all services.

Example:

```txt
https://nova-studio-gold.vercel.app/api/services
```

### GET `/api/projects`

Fetches all portfolio projects.

Example:

```txt
https://nova-studio-gold.vercel.app/api/projects
```

### POST `/api/projects`

Adds a new portfolio project.

Request body:

```json
{
  "title": "Project Name",
  "category": "Web Design",
  "imageUrl": "https://example.com/image.jpg"
}
```

### GET `/api/stats`

Fetches statistics data.

Example:

```txt
https://nova-studio-gold.vercel.app/api/stats
```

### POST `/api/contact`

Submits a contact form entry and stores it in the database.

Request body:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "Project inquiry message"
}
```

### GET `/api/contacts`

Fetches all contact form submissions.

Example:

```txt
https://nova-studio-gold.vercel.app/api/contacts
```

## Database Models

The project uses PostgreSQL with Prisma ORM.

Main models:

* Service
* Project
* Stat
* Contact

### Service

Stores agency services such as Web Design, Front-End Development, and Branding.

### Project

Stores portfolio projects with title, category, and image URL.

### Stat

Stores business statistics such as completed projects, clients, and years of experience.

### Contact

Stores contact form submissions with name, email, message, and creation date.

## Local Setup Instructions

Clone the repository:

```bash
git clone https://github.com/oindrilakha12-ui/nova-studio.git
```

Go inside the project folder:

```bash
cd nova-studio
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root folder and add:

```env
DATABASE_URL="your_postgresql_database_url"
```

Generate Prisma client:

```bash
npx prisma generate
```

Run database migration:

```bash
npx prisma migrate dev
```

Start development server:

```bash
npm run dev
```

Open in browser:

```txt
http://localhost:3000
```

## Build Command

```bash
npm run build
```

## Deployment

The project is deployed on Vercel. The `DATABASE_URL` environment variable is added in Vercel project settings.

## Design Decisions

* Next.js was used because it supports both frontend pages and backend API routes in one project.
* Prisma was used to simplify PostgreSQL database operations.
* PostgreSQL was used for structured data such as services, projects, stats, and contact submissions.
* The UI uses reusable sections and card-based layouts for clean presentation.
* The admin panel is kept simple and functional, focusing on managing submissions and portfolio content.
* The contact form uses frontend state and backend API submission for end-to-end fullstack functionality.

## Notes

* MongoDB analytics is not implemented in this version.
* The admin authentication is basic and suitable for assignment/demo purposes.
* The project focuses on core fullstack functionality: frontend UI, APIs, database integration, and admin data management.
