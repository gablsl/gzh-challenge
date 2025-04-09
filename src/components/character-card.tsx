import { Character } from '@/lib/graphql/types';
import Image from 'next/image';

export function CharacterCard({ image, name, species }: Character) {
  return (
    <div className='bg-gray-800 rounded-lg shadow-sm border border-gra-80 cursor-pointer hover:bg-gray-600 transition-colors'>
      <div className='w-full aspect-square relative'>
        <Image
          src={image}
          alt={`Personagem ${name}`}
          fill
          sizes='(max-width: 600px) 50vw, 25vw'
          priority
        />
      </div>

      <div className='p-3 md:p-4'>
        <h3 className='font-medium text-white text-base md:text-lg truncate'>
          {name}
        </h3>
        <p className='text-white text-sm md:text-base mt-1'>
          <span className='font-semibold text-gray-400'>Especié:</span>{' '}
          {species}
        </p>
      </div>
    </div>
  );
}
