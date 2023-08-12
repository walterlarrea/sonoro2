'use client'
import './layout-main.styles.css'
import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import Player from '@/components/playerComponents/Player';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export default function MainLayout({ children }) {

  return (
    <QueryClientProvider client={client}>
      <div className='app-layout'>
        <Header />
        <div className='grid-layout gap-[8px]'>
          <SideBar />
          <div className='
            rounded-lg
            bg-zinc-950
            bg-gradient-to-b 
            from-[#131313]
            overflow-y-auto
            p-3'>
            {children}
          </div>
        </div>
        <div style={{ clear: 'both' }}></div>
        <Player />
      </div>
    </QueryClientProvider>
  );
}
