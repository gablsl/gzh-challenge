import Link from 'next/link';

export function Back() {
  return (
    <Link
      href='/'
      className='flex items-center text-gray-300 hover:text-blue-200 transition-colors mb-6 text-sm md:text-lg'
    >
      ← Voltar para a lista
    </Link>
  );
}
