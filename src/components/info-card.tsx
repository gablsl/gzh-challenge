import Link from 'next/link';

type InfoCardProps = {
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
};

export function InfoCard({ label, value, isLink, href }: InfoCardProps) {
  return (
    <div className='bg-gray-700 p-4 rounded-lg'>
      <h3 className='text-sm font-medium text-gray-300'>{label}</h3>
      {isLink && href ? (
        <Link
          href={href}
          className='text-sm md:text-lg font-semibold text-white hover:text-blue-400 transition-colors'
        >
          {value || 'Desconhecida'}
        </Link>
      ) : (
        <p className='text-sm md:text-lg font-semibold text-white'>
          {value || 'Desconhecida'}
        </p>
      )}
    </div>
  );
}
