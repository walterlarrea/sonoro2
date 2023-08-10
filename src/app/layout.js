import './globals.css'
import Translator from '@/config/i18nProvider';
import { TrackProvider } from '@/context/trackProvider';
import { ThemeProvider } from '@/context/themeProvider';

export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        <Translator>
          <ThemeProvider>
            <TrackProvider>
              {children}
            </TrackProvider>
          </ThemeProvider>
        </Translator>
      </body>
    </html>
  );
}

export default RootLayout
