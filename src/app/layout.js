'use client'
import Header from './components/Header';
import SideBar from './components/Sidebar';
import './globals.css'

export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}


