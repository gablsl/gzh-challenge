import { ClipLoader } from 'react-spinners';

export function Loading() {
  return (
    <div className='inline-flex items-center justify-center h-[900px]'>
      <ClipLoader color='purple' size={64} />
    </div>
  );
}
