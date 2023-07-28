import './globals.css'
import Translator from '@/config/i18nProvider';

export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        <Translator>
          {children}
        </Translator>
      </body>
    </html>
  );
}

export default RootLayout
