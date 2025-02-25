import React from 'react';

interface MealProps {
  params: {
    slug: string;
  };
}

const Meal: React.FC<MealProps> = ({ params }) => {
  return <div>{params.slug}</div>;
};

export default Meal;
