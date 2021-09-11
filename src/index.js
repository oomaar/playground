import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyle, Layout } from "./Global";

render(
    <Layout>
        <GlobalStyle />
        <App />
    </Layout>,
    document.getElementById('root')
);