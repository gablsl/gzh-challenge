'use client';

import { GET_CHARACTER_INFO } from '@/lib/graphql/queries';
import { getStatusColor } from '@/utils/get-status-color';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { InfoCard } from '@/components/info-card';
import { Loading } from '@/components/loading';
import { Back } from '@/components/back';
import Image from 'next/image';

export default function CharacterPage() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id: id },
  });

  if (loading) return <Loading />;

  if (error)
    return (
      <div className='bg-gray-50 p-6'>
        <div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md'>
          <p className='text-red-500'>Erro: {error.message}</p>
        </div>
      </div>
    );

  const character = data.character;

  return (
    <div className='bg-gray-900 p-4 md:p-6'>
      <div className='max-w-4xl mx-auto'>
        <Back />

        <div className='bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
          <div className='relative h-64 md:h-96 w-full'>
            <Image
              src={character.image}
              alt={character.name}
              fill
              className='object-cover rounded-t-lg'
              sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw'
              priority
            />
          </div>

          <div className='p-6'>
            <div className='flex justify-between items-start'>
              <h1 className='text-3xl font-bold text-white'>
                {character.name}
              </h1>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(
                  character.status
                )}`}
              >
                {character.status}
              </span>
            </div>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <InfoCard label='Espécie' value={character.species} />
                <InfoCard label='Gênero' value={character.gender} />
              </div>
              <div className='space-y-4'>
                <InfoCard
                  label='Origem'
                  value={character.origin?.name}
                  isLink={character.origin?.name}
                  href={`/planet/${character.origin.id}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
