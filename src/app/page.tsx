import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 text-center">
        <h1 className="text-4xl/loose text-center">Jared Sun</h1>
        <h2 className="text-xl/relaxed">Engineer, Developer</h2>
        <p className="mt-10">
          This website is still in early development. Check back later for more
          content.
        </p>
      </div>
    </main>
  );
}
