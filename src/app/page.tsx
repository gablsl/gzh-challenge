'use client';

import { CharacterCard } from '@/components/character-card';
import { SearchBar } from '@/components/search-bar';
import { GET_CHARACTERS } from '@/lib/graphql/queries';
import { Character } from '@/lib/graphql/types';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/loading';
import Link from 'next/link';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage, name: search },
  });

  useEffect(() => {
    if (!search) {
      setCurrentPage(1);
    }
  }, [search]);

  if (loading) return <Loading />;
  if (error) return <p>Error : {error.message}</p>;

  const totalPages = data.characters.info.pages;

  return (
    <div className='p-5 md:p-8 flex flex-col gap-8'>
      <SearchBar onSearch={setSearch} />

      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4'>
          {data.characters.results.length === 0 ? (
            <div className='col-span-full flex justify-center items-center py-8'>
              <p className='text-white text-sm md:text-lg'>
                Nenhum personagem encontrado.
              </p>
            </div>
          ) : (
            data.characters.results.map((character: Character) => (
              <Link key={character.id} href={`/character/${character.id}`}>
                <CharacterCard {...character} />
              </Link>
            ))
          )}
        </div>
      </div>

      {data.characters.results.length <= 19 ? (
        <></>
      ) : (
        <div className='flex items-center gap-4 mt-8 sm:flex-row sm:justify-center'>
          <button
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className='pagination-button'
          >
            Anterior
          </button>

          <span className='px-4 py-2 text-white text-sm sm:text-base'>
            Pág {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={
              currentPage === totalPages || data.characters.results.length === 0
            }
            className='pagination-button'
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
