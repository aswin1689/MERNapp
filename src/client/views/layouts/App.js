import React, { Component } from 'react';

import ArticlesContainer from '../pages/articles/ArticlesContainer';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header title="Blogging MERN" />
                <main>
                    <ArticlesContainer />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
