import { useState } from 'react';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [character, setCharacter] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(character);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex gap-2 sm:flex-row sm:items-center'
    >
      <input
        type='text'
        placeholder='Digite um personagem'
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className='w-full border border-white text-white p-3 bg-transparent placeholder-white rounded'
      />
      <button
        type='submit'
        className='bg-gray-800 text-white p-3 rounded hover:scale-105 transition-transform'
      >
        Buscar
      </button>
    </form>
  );
}
