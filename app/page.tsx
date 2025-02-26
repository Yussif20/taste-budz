import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col gap-6 min-h-80 ">
      <h1 className="text-dark text-2xl font-bold dark:text-8xl">
        Delicious Food Delivered
      </h1>
      <p className="text-gray">Fresh and healthy meals for you.</p>
      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDark">
        Order Now
      </button>
      <button className="bg-primaryLight text-white px-4 py-2 rounded-lg">
        View Menu
      </button>
      <Link href="/community">Visit Community Page</Link>
      <Link href="/meals">Visit Meals page</Link>
    </main>
  );
}
