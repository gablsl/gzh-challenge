export function SearchBar() {
  return (
    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Digite um personagem'
        className='w-full border border-gray-800 p-3'
      />
      <button className='bg-gray-800 text-white p-3 rounded hover:scale-105'>
        Buscar
      </button>
    </div>
  );
}
