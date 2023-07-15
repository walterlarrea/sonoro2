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
      <body>
     <div className='max-h-scren overflow-hidden'>
      <div style={{height:"7.5vh"}}>
        <Header/>
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
  <Sidebar/>
  {children} 
      </div>
        
      </div>
  
      
       </body>
    </html>
  );
}
