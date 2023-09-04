'use client';
import { useState } from 'react';
function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className='w-[50px] h-[50px] bg-[#a4a4a3] rounded-[10px] font-bold text-[20px]'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div className='text-white'>
      <nav className='bg-[#181818]'>
        <ul className='h-[70px] flex items-center justify-center gap-[30px] cursor-pointer'>
          <li>首頁</li>
          <li>產品</li>
          <li>關於團隊</li>
          <li>FAQ</li>
          <li>聯繫我們</li>
        </ul>
      </nav>
      <main className='w-1/3 mx-auto flex flex-col items-center mt-[50px] bg-[#1b2028] rounded-[10px] p-[70px]'>
        <div className='text-[35px]'>Hello World!</div>
        <div className='w-full flex justify-between items-center mt-[50px] text-[25px]'>
          <Button onClick={() => setCount(count - 1)}>-1</Button>
          <div>
            Count: <span className='font-bold'>{count}</span>
          </div>
          <Button onClick={() => setCount(count + 1)}>+1</Button>
        </div>
      </main>
    </div>
  );
}
