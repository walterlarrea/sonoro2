import './globals.css'

export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}


