import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../../styles/theme';
import App from './App';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import SEO from '../meta/SEO';
import '../../styles/global.css';

export default function Layout({ location, seo, children }) {
  return (
    <ThemeProvider theme={theme}>
      <App>
        <SEO {...seo} />
        <Header />
        <Body>{children}</Body>
        <Footer />
      </App>
    </ThemeProvider>
  );
}
