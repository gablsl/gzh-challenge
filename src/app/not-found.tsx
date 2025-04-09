'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[900px] flex flex-col items-center justify-center text-white px-4 text-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
        404 - Universo não encontrado
      </h1>
      <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-md'>
        Parece que você se perdeu no multiverso
      </p>
      <Link href='/' className='back-btn'>
        Voltar para casa
      </Link>
    </div>
  );
}
