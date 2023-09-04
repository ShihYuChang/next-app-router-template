export default function Home() {
  const localStorageCounter = localStorage.getItem('counter');
  return (
    <div className='text-[45px]'>
      {localStorageCounter ? 'Hello World!' : 'Local Storage is Empty'}
    </div>
  );
}
