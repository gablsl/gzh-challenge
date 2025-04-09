'use client';

import { CharacterCard } from '@/components/character-card';
import { SearchBar } from '@/components/search-bar';
import { GET_CHARACTERS } from '@/lib/graphql/queries';
import { Character } from '@/lib/graphql/types';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const totalPages = data.characters.info.pages;

  return (
    <div className='p-4 flex flex-col gap-8'>
      <SearchBar />

      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4'>
          {data.characters.results.map((character: Character) => (
            <CharacterCard
              key={`${crypto.randomUUID()}-${character.name}`}
              {...character}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-4 mt-8'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300'
        >
          Anterior
        </button>

        <span className='px-4 py-2'>
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300'
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
