'use client';

import { CharacterCard } from '@/components/character-card';
import { SearchBar } from '@/components/search-bar';
import { GET_CHARACTERS } from '@/lib/graphql/queries';
import { Character } from '@/lib/graphql/types';
import { useQuery } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='p-4 flex flex-col gap-12'>
      <SearchBar />
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5'>
          {data.characters.results.map(
            (character: Character, index: number) => (
              <CharacterCard key={index} {...character} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
