import { Character } from '@/lib/graphql/types';
import Image from 'next/image';

export function CharacterCard({ image, name, species }: Character) {
  return (
    <div className='w-full h-full flex flex-col bg-gray-800 rounded-lg shadow-sm border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors'>
      <div className='w-full aspect-square relative overflow-hidden rounded-t-lg'>
        <Image
          src={image}
          alt={`Personagem ${name}`}
          fill
          className='object-cover'
          sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw'
          priority
        />
      </div>

      <div className='p-3 md:p-4 h-[90px] flex flex-col justify-between'>
        <h3 className='font-medium text-white text-base md:text-lg line-clamp-2 leading-tight truncate'>
          {name}
        </h3>
        <p className='text-gray-300 text-sm md:text-base truncate'>
          <span className='font-semibold text-gray-400'>Espécie:</span>{' '}
          {species}
        </p>
      </div>
    </div>
  );
}
