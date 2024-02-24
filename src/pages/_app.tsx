import { Layout } from '@/elements';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StrictMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StrictMode>
    </>
  );
}
