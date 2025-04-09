'use client';

import { GET_CHARACTER_BY_NAME } from '@/lib/graphql/queries';
import { Character } from '@/lib/graphql/types';
import { getStatusColor } from '@/utils/get-status-color';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { normalizeName } from '@/utils/normalize-name';
import { InfoCard } from '@/components/info-card';
import { Loading } from '@/components/loading';
import Image from 'next/image';
import Link from 'next/link';

export default function CharacterPage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name as string).replace(/-/g, ' ');

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_NAME, {
    variables: { name: decodedName },
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

  const character =
    data?.characters?.results.find(
      (c: Character) => normalizeName(c.name) === name
    ) || data?.characters?.results[0];

  return (
    <div className='bg-gray-900 p-4 md:p-6'>
      <div className='max-w-4xl mx-auto'>
        <Link
          href='/'
          className='flex items-center text-gray-300 hover:text-blue-200 transition-colors mb-6'
        >
          Voltar para a lista
        </Link>

        <div className='bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
          <div className='relative h-64 md:h-80 w-full'>
            <Image
              src={character.image}
              alt={character.name}
              fill
              className='object-cover'
              sizes='100vw'
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
                  href={`/planet/${encodeURIComponent(
                    character.origin?.name.toLowerCase().replace(/\s+/g, '-')
                  )}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
