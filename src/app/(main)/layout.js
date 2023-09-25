'use client'
import './layout-main.styles.css'
import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import Player from '@/components/playerComponents/BottomPlayer';

export default function MainLayout({ children }) {

  return (
    <div className='app-layout'>
      <Header />
      <div className='grid-layout gap-[8px]'>
        <SideBar />
        <div className='
            rounded-lg
            bg-[#e5fdba]
            bg-gradient-to-b 
            from-[#cee1ab]
            overflow-y-auto
            p-3
            shadow-neobrutalism'>
          {children}
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      <Player />
    </div>
  );
}
