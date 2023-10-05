import './globals.css'
import Translator from '@/config/i18nProvider';
import { PlayerProvider } from '@/context/playerProvider';
import { ThemeProvider } from '@/context/themeProvider';
import { QueryProvider } from '@/context/queryProvider';
import { SessionProvider } from '@/context/sessionProvider';

export const metadata = {
  title: 'Sonoro',
  description: 'bla bla bla',
}

function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        <Translator>
          <QueryProvider>
            <SessionProvider>
              <ThemeProvider>
                <PlayerProvider>
                  {children}
                </PlayerProvider>
              </ThemeProvider>
            </SessionProvider>
          </QueryProvider>
        </Translator>
      </body>
    </html>
  );
}

export default RootLayout
