'use client'
import './layout-main.styles.css'
import { initTheme } from '@/utils/themeHandler'
import Header from '@/components/Header';
import SideBar from '@/components/Sidebar';
import Player from '@/components/playerComponents/BottomPlayer';
import { useEffect } from 'react';

export default function MainLayout({ children }) {
  useEffect(initTheme, [])

  return (
    <div className='app-layout'>
      <Header />
      <div className='grid-layout gap-[8px]'>
        <SideBar />
        <div className='
            rounded-lg
            bg-[#e5fdba]
            dark:bg-[#34392A]
            bg-gradient-to-b 
            from-[#cee1ab]
            dark:from-[#363D29]
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
