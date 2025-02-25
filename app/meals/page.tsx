import Link from 'next/link';
import React from 'react';

const MealsPage: React.FC = () => {
  return (
    <>
      <h3>Our Meals Page</h3>
      <p>
        <Link href="/meals/share">Visit Share Page</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">Visit Meal-slug Page</Link>
      </p>
    </>
  );
};

export default MealsPage;
