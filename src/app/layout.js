import './globals.css'
import Translator from '@/config/i18nProvider';
import { PlayerProvider } from '@/context/playerProvider';
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
            <PlayerProvider>
              {children}
            </PlayerProvider>
          </ThemeProvider>
        </Translator>
      </body>
    </html>
  );
}

export default RootLayout
