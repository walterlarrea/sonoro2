'use client';
import './globals.css'
import Header from '../app/components/Header';
import Sidebar from './components/Sidebar';



export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

export default function RootLayout({ children }) {
  return (



    <html lang="en">
      <body >

      
        <div className='max-h-screen overflow-hidden flex flex-col'>
          <Header />
          <div className='flex-grow overflow-y-auto mx-4'>
            <div className='flex h-full'>
              <Sidebar />
              <div className='flex-grow'>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}