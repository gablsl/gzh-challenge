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
        className='bg-purple-600 text-white border border-bg-white p-3 rounded hover:bg-purple-700 transition-colors'
      >
        Buscar
      </button>
    </form>
  );
}
