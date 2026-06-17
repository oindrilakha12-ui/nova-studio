# Nova Studio — Fullstack Developer Assignment

Nova Studio is a fullstack web application built for a fictional digital agency. The goal of this project is to show how a digital agency platform can present its services, portfolio work, key statistics, and collect project inquiries from users.

The application includes a public-facing landing page, backend API routes, PostgreSQL database integration, and a basic admin panel for managing submitted inquiries and portfolio content.

## Live Demo

https://nova-studio-gold.vercel.app

## GitHub Repository

https://github.com/oindrilakha12-ui/nova-studio

## Tech Stack

* **Frontend:** Next.js
* **Styling:** CSS
* **Backend:** Next.js API Routes
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Deployment:** Vercel
* **Version Control:** Git and GitHub

## Main Features

### Public Website

The public website is designed as a modern digital agency landing page. It includes:

* Hero section with a clear call-to-action
* Services section
* Portfolio section
* Statistics section
* Contact form
* Responsive layout
* Smooth scrolling for the “Start a Project” button
* Clean card-based design with hover effects

### Contact Form

Visitors can submit project inquiries using the contact form. The form collects:

* Name
* Email
* Message

The submitted data is sent to the backend and stored in the PostgreSQL database.

### Admin Panel

Admin panel:

https://nova-studio-gold.vercel.app/admin

Admin password:

```txt
admin123
```

The admin panel includes:

* Basic password protection
* View contact form submissions
* View portfolio projects
* Add new portfolio projects

## API Documentation

Base API URL:

```txt
https://nova-studio-gold.vercel.app/api
```

### GET `/api/services`

Fetches all services displayed on the website.

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

Fetches the agency statistics.

Example:

```txt
https://nova-studio-gold.vercel.app/api/stats
```

### POST `/api/contact`

Submits a contact form entry.

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

## Database Structure

The project uses PostgreSQL with Prisma ORM.

Main models:

* **Service**
* **Project**
* **Stat**
* **Contact**

### Service

Stores the services offered by Nova Studio, such as Web Design, Front-End Development, and Branding.

### Project

Stores portfolio project details including title, category, and image URL.

### Stat

Stores key business statistics such as completed projects, clients, and years of experience.

### Contact

Stores contact form submissions including name, email, message, and creation date.

## Local Setup

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

Create a `.env` file in the root folder and add your PostgreSQL database URL:

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

Start the development server:

```bash
npm run dev
```

Open the project in the browser:

```txt
http://localhost:3000
```

## Build Command

```bash
npm run build
```

## Deployment

The project is deployed on Vercel. The `DATABASE_URL` environment variable is added in the Vercel project settings so the deployed application can connect to the PostgreSQL database.

## Design Decisions

I used Next.js because it allows both frontend pages and backend API routes in the same project. This made it easier to build the fullstack application in one codebase.

Prisma was used to connect the application with PostgreSQL and handle database operations in a clean way. PostgreSQL stores structured data such as services, projects, statistics, and contact submissions.

The UI is kept clean and modern with a card-based layout. The homepage focuses on presenting the agency clearly, while the admin panel is kept simple and functional.

## Notes

* MongoDB analytics is not implemented in this version.
* Admin authentication is basic and created for assignment/demo purposes.
* The main focus of this project is fullstack functionality: frontend UI, backend APIs, database integration, contact form handling, and basic admin management.
