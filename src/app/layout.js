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
     
      <Header/>
       {children} 
       <Sidebar/>
       
       </body>
    </html>
  );
}
