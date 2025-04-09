'use client';

import { Loading } from '@/components/loading';
import { GET_PLANET_INFO } from '@/lib/graphql/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { normalizeName } from '@/utils/normalize-name';
import { Resident } from '@/lib/graphql/types';

export default function PlanetPage() {
  const { name } = useParams();
  const planetName = decodeURIComponent(name as string).replace(/-/g, ' ');

  const { loading, error, data } = useQuery(GET_PLANET_INFO, {
    variables: { name: planetName },
  });

  if (loading) return <Loading />;

  console.log('Dados recebidos:', data);

  if (error)
    return (
      <div className='bg-gray-900 p-6'>
        <div className='max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg'>
          <p className='text-red-400'>Error: {error.message}</p>
        </div>
      </div>
    );

  const planet = data?.locations?.results[0];

  if (!planet) {
    return (
      <div className='bg-gray-900 p-6'>
        <div className='max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg'>
          <p className='text-white'>Planeta não encontrado</p>
          <Link
            href='/'
            className='text-blue-400 hover:text-blue-300 mt-4 inline-block'
          >
            ← Voltar para lista
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gray-900 min-h-screen p-4 md:p-6'>
      <div className='max-w-4xl mx-auto'>
        <Link
          href='/'
          className='flex items-center text-gray-300 hover:text-blue-200 transition-colors mb-6'
        >
          ← Voltar para a lista
        </Link>

        <div className='bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
          <div className='p-6'>
            <div className='flex justify-between items-start'>
              <h1 className='text-3xl font-bold text-white'>{planet.name}</h1>
              <div className='flex gap-4'>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-white'>
                  {planet.type}
                </span>
                <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-600 text-white'>
                  {planet.dimension || 'Dimensão desconhecida'}
                </span>
              </div>
            </div>

            <div className='mt-8'>
              <h2 className='text-2xl font-semibold text-white mb-4'>
                Residentes
              </h2>

              {planet.residents?.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {planet.residents.map((resident: Resident) => (
                    <Link
                      key={resident.id}
                      href={`/character/${normalizeName(resident.name)}`}
                      className='bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors'
                    >
                      {resident.image && (
                        <div className='relative h-32 w-full mb-2'>
                          <Image
                            src={resident.image}
                            alt={resident.name}
                            fill
                            className='object-cover rounded-md'
                            sizes='100vw'
                          />
                        </div>
                      )}
                      <p className='text-white text-center truncate'>
                        {resident.name}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className='text-gray-400'>
                  Nenhum residente encontrado neste planeta
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
