'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}
