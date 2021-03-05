import  React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';
import { DefaultSeo } from 'next-seo';
import SEO from '../components/SEO';



const MyApp = ({ Component, pageProps }: AppProps) => (
      <ThemeProvider>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
);


export default MyApp;
