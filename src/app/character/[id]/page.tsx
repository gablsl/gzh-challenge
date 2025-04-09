'use client';

import { GET_CHARACTER_INFO } from '@/lib/graphql/queries';
import { getStatusColor } from '@/utils/get-status-color';
import { useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import { InfoCard } from '@/components/info-card';
import { Loading } from '@/components/loading';
import { Back } from '@/components/back';
import Image from 'next/image';

export default function CharacterPage() {
  const { id } = useParams();
  const router = useRouter();
  const validId = typeof id === 'string' && id.trim() && id !== 'null';

  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id: id },
    skip: !validId,
  });

  if (loading) return <Loading />;

  if (error) return router.push('/500');

  const character = data.character;

  if (!character) {
    return router.push('/404');
  }

  return (
    <div className='bg-gray-900 p-4 md:p-6'>
      <div className='max-w-4xl mx-auto'>
        <Back />

        <div className='bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
          <div className='relative h-64 md:h-115 w-full'>
            <Image
              src={character.image}
              alt={character.name}
              fill
              className='object-cover'
              priority
            />
          </div>

          <div className='p-6'>
            <div className='flex justify-between items-center'>
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
