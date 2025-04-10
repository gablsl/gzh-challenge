import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchParam = searchParams.get('q') || '';
  const [character, setCharacter] = useState(searchParam);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newParams = new URLSearchParams();
    if (character) newParams.set('q', character);
    router.push(`/?${newParams.toString()}`);

    onSearch(character);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex gap-2 flex-row items-center justify-center'
    >
      <input
        type='text'
        placeholder='Digite um personagem'
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className='w-full text-sm md:text-lg border border-white text-white p-3 bg-transparent placeholder-white rounded'
      />
      <button
        type='submit'
        className='bg-purple-600 text-white border border-bg-white p-3 text-sm md:text-lg rounded hover:bg-purple-700 transition-colors'
      >
        Buscar
      </button>
    </form>
  );
}
