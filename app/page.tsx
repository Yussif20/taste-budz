import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        {/* Slideshow */}
        <div className="w-full bg-gray-700 rounded-lg"></div>

        {/* Hero Section */}
        <div className="text-[#ddd6cb] text-2xl text-center">
          <h1 className="text-4xl font-bold font-montserrat tracking-wider uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
            Next level Food for next level foodies.
          </h1>
          <p className="mt-4">Taste & share food from all over the world.</p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-6 text-2xl">
          <Link
            href="/community"
            className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] transition-all duration-300"
          >
            Join the community
          </Link>
          <Link
            href="/meals"
            className="mt-4 px-6 py-3 rounded-lg bg-transparent text-[#ff9b05] font-bold no-underline hover:text-[#f9b241] transition-all duration-300"
          >
            Explore meals
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#1F1F1F] py-12">
        {/* How It Works Section */}
        <section className="flex flex-col gap-6 text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-4xl font-bold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        {/* Why NextLevel Food Section */}
        <section className="flex flex-col gap-6 text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-4xl font-bold">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
