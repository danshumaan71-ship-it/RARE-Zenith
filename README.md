{
  "name": "rare-zenith",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "3.4.1",
    "autoprefixer": "10.4.16",
    "postcss": "8.4.31"
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Rare Zenith blue tone
        accent: "#F59E0B"
      }
    }
  },
  plugins: []
};
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
    import "./globals.css";

export const metadata = {
  title: "Rare Zenith – Real Estate Consultancy",
  description:
    "Helping investors and end-users find ideal under-construction and ready-to-move projects."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, sans-serif;
}
import Link from "next/link";

const projects = [
  {
    slug: "zenith-heights",
    name: "Zenith Heights",
    location: "Noida Extension",
    status: "Under Construction",
    price: "₹75 L – ₹1.2 Cr",
    description:
      "Luxury 3 BHK & 4 BHK apartments with modern amenities and metro connectivity."
  },
  {
    slug: "urban-vista",
    name: "Urban Vista",
    location: "Siddharth Vihar",
    status: "Ready to Move",
    price: "₹95 L – ₹1.4 Cr",
    description:
      "Spacious residences offering clubhouse, gym and smart home features."
  }
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Rare Zenith</h1>
        <p className="text-lg mt-2">
          Your trusted consultancy for under-construction and ready-to-move
          projects.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block bg-white shadow rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{p.name}</h2>
            <p className="text-sm text-gray-600">
              {p.location} • {p.status}
            </p>
            <p className="mt-3">{p.description}</p>
            <p className="mt-3 font-semibold text-primary">{p.price}</p>
            <span className="inline-block mt-3 text-accent font-medium">
              View Details →
            </span>
          </Link>
        ))}
      </section>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Rare Zenith | All Rights Reserved
      </footer>
    </main>
  );
}
import Link from "next/link";

const projects = {
  "zenith-heights": {
    name: "Zenith Heights",
    details:
      "Zenith Heights offers premium 3 BHK & 4 BHK apartments with panoramic views, high-end finishes, and resort-style amenities."
  },
  "urban-vista": {
    name: "Urban Vista",
    details:
      "Urban Vista is a ready-to-move community featuring luxury living, a clubhouse, fitness centre, and excellent road connectivity."
  }
};

export default function ProjectPage({ params }) {
  const project = projects[params.slug];
  if (!project) return <div className="p-6">Project not found</div>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-primary underline">
        ← Back to Projects
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2 text-primary">
        {project.name}
      </h1>
      <p className="text-lg text-gray-700">{project.details}</p>
      <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-800">
        Enquire Now
      </button>
    </main>
  );
}

  }
};
