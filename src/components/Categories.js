
'use client';
import { useRouter } from 'next/navigation';
import { Mountain, Cabin, Rustic, Beachfront, Modern } from './icons/Icons';

const categories = [
  { icon: <Beachfront />, label: 'Beachfront', category: 'Beachfront' },
  { icon: <Rustic />, label: 'Rustic', category: 'Rustic' },
  { icon: <Cabin />, label: 'Cabin', category: 'Cabin' },
  { icon: <Modern />, label: 'Modern', category: 'Modern' },
  { icon: <Mountain />, label: 'Mountain', category: 'Mountain' },
  { icon: <Beachfront />, label: 'Beachfront', category: 'Beachfront' },
  { icon: <Rustic />, label: 'Rustic', category: 'Rustic' },
  { icon: <Cabin />, label: 'Cabin', category: 'Cabin' },
  { icon: <Modern />, label: 'Modern', category: 'Modern' },
  { icon: <Mountain />, label: 'Mountain', category: 'Mountain' },
  { icon: <Beachfront />, label: 'Beachfront', category: 'Beachfront' },
  { icon: <Rustic />, label: 'Rustic', category: 'Rustic' },
  { icon: <Cabin />, label: 'Cabin', category: 'Cabin' },
 

];

const Categories = () => {
  const router = useRouter()
  return (
    <div className='flex justify-center overflow-x-auto space-x-6 p-4'>
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => router.push(`/${category?.category}`)}
          className="flex flex-col items-center text-gray-600 justify-center text-center cursor-pointer transition duration-200 ease-in-out hover:text-blue-500"
        >
          {/* Icon */}
          {category.icon}
          {/* Label */}
          <span className='mt-2 text-sm '>{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
