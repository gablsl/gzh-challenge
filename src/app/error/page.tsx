'use client';

import Link from 'next/link';

export default function Custom500() {
  return (
    <div className='h-[700px] md:h-[900px] flex flex-col items-center justify-center text-white px-4 text-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
        500 - Colapso no servidor
      </h1>
      <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-md'>
        O núcleo do servidor entrou em colapso. Nossos engenheiros já estão
        trabalhando para restaurar a realidade.
      </p>
      <div className='flex gap-4'>
        <Link href='/' className='back-btn'>
          Voltar para casa
        </Link>
      </div>
    </div>
  );
}
