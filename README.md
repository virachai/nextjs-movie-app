# Next.js Movie App

This is a movie application built with Next.js. It allows users to browse and search for movies, view details, and more.

## Features

- Browse popular movies
- Search for movies by title
- View movie details including the backdrop and poster paths, title, overview, release date, and release year
- Responsive design
- Front-end developed with Next.js
- Tailwind CSS used for styling and responsive design
- Back-end API developed with NestJS, acting as an API Gateway
- Integration with a Free Movie API for fetching movie data
- Handles business logic and data transformation between the front-end and back-end
- **User authentication** using NextAuth, allowing users to log in and access personalized features like an avatar in the navigation bar once logged in.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- NestJS (for the back-end)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-movie-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-movie-app
   ```

3. Install front-end dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Install back-end dependencies:

   - Navigate to the `backend` directory (or the directory where your NestJS API is located).

     ```bash
     cd backend
     ```

   - Install dependencies for the back-end:

     ```bash
     npm install
     ```

     or

     ```bash
     yarn install
     ```

### Configuration

Make sure to configure the `NEXT_PUBLIC_BASE_API` environment variable to point to your back-end API. Add the following to your `.env.local` file:

```env
NEXT_PUBLIC_BASE_API=http://localhost:4000
```

This will ensure the front-end communicates with the correct API endpoint.

### User Authentication with NextAuth

The app uses **NextAuth** for authentication. It allows users to log in and manage sessions. Upon successful login, users can see their avatar in the navigation bar.

Once logged in, the user’s avatar will be displayed in the top navigation bar, helping to personalize the experience. This integration with **NextAuth** makes it easy to manage user sessions and authentication states.

Make sure to configure **NextAuth** correctly to support login functionality. You can find the configuration in the `lib/authOptions.ts` file.

### Running the Development Server

To start the development server for the front-end:

```bash
npm run dev
```

or

```bash
yarn dev
```

To start the development server for the back-end (NestJS):

```bash
npm run start:dev
```

or

```bash
yarn start:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the front-end result.

The back-end will typically run on [http://localhost:4000](http://localhost:4000) or a different port defined in the NestJS project.

### Building for Production

To build the project for production, run the following for the front-end:

```bash
npm run build
```

or

```bash
yarn build
```

This will create an optimized production build in the `.next` directory.

For the back-end, run:

```bash
npm run build
```

or

```bash
yarn build
```

This will compile the NestJS back-end for production.

### Folder Structure

The folder structure is organized as follows:

```.
├── app/
│   ├── (auth)/
│   │   ├── forgot-password/
│   │   ├── login/
│   ├── api/
│   │   ├── auth/
│   │   ├── '[...nextauth]'/
│   ├── home/
│   │   ├── [category]/
│   │   ├── _components/
│   ├── movie/
│   │   ├── '[id]'/
│   ├── search/
│   │   ├── _components/
│   ├── select-profile/
├── components/
│   ├── Button/
│   ├── NextAuthProvider.tsx
│   ├── login-btn.tsx
│   ├── ui/
├── lib/
│   ├── authOptions.ts
│   ├── categoryMap.ts
│   ├── utils.ts
├── types/
│   ├── index.ts
```

- **`app/`**: Contains all the front-end Next.js pages and components.
- **`components/`**: Reusable UI components like buttons, navigation, and others.
- **`lib/`**: Helper functions and utility files for authentication, category mappings, etc.
- **`types/`**: TypeScript types used in the application.
