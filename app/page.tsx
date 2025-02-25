import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-6 min-h-screen">
      <h1 className="text-3xl">Welcome to Taste Budz App</h1>
      <Link href="/community">Visit Community Page</Link>
      <Link href="/meals">Visit Meals page</Link>
    </main>
  );
}
