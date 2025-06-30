# Pinteresting

A Pinterest clone that allows users to create, save, and share their own pins.

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Cloning](#cloning)
5. [Deploy](#deploy)

## <a name="introduction"> Introduction</a>

Pinteresting is a Pinterest clone web application built with **Next.js** and **Typescript** that helps users who do not want to see AI generated images in their dashboard to save, favorite and like whatever pins they desire!

## <a name="features"> Features</a>

 **Authentication**: Users may log in or sign up with their Google accounts thanks to NextAuth authentication.

 **Creating Pins**: Users may upload their own pins and either make them public or private.

 **Like, Favorite, Save**: Users may like, favorite or save their desired pins.

 ## <a name="tech-stack"> Tech Stack</a>

- Next.js
- Firebase
- NextAuth
- TypeScript
- Tailwind CSS
- Turbopack

## <a name="cloning"> Cloning</a>

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/louisvincelli/bizniz.git
cd bizniz
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

You'll need a Google Maps API key(with Places and Maps Javascript APIs enabled). Create a file named `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

```

Replace the placeholder values with your credentials. You can obtain these credentials by signing up on the [Google Cloud Console](https://cloud.google.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="deploy"> Deploy on Vercel</a>

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)