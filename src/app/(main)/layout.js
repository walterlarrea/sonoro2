'use client'
import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';

export default function MainLayout({ children }) {

  return (
    <div className='max-h-screen overflow-hidden flex flex-col'>
      <Header />
      <div className='flex-grow overflow-y-auto mx-4'>
        <div className='flex h-full'>
          <SideBar />
          <div className='flex-grow'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


