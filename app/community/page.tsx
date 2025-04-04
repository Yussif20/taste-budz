'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Image imports for slideshow
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

// Icon imports for perks
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

// Slideshow Component
function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[600px] h-[400px] mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${
            index === currentImageIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
          alt={image.alt}
          quality={85}
          priority={index === 0}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

// Main Community Page Component
export default function CommunityPage() {
  return (
    <>
      <header className="space-y-12 mx-auto my-12 w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] text-center">
        <h1 className="font-['Montserrat',_sans-serif]">
          One shared passion:{' '}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>

      <main className="w-[90%] max-w-[40rem] mx-auto text-center">
        <h2 className="font-['Montserrat',_sans-serif] text-3xl mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>

        {/* Adding the Slideshow */}
        <div className="mb-12">
          <ImageSlideshow />
        </div>

        <ul className="list-none m-12 p-0">
          <li className="flex flex-col items-center gap-8 mb-12">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              width={128}
              height={128}
              className="object-contain"
            />
            <p className="font-['Montserrat',_sans-serif] text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8 mb-12">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              width={128}
              height={128}
              className="object-contain"
            />
            <p className="font-['Montserrat',_sans-serif] text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              width={128}
              height={128}
              className="object-contain"
            />
            <p className="font-['Montserrat',_sans-serif] text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
