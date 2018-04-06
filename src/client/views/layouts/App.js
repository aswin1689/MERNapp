import React, { Component } from 'react';
import ArticlesContainer from '../pages/articles/ArticlesContainer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <header>Menu logo</header>
                <main>
                    <ArticlesContainer />
                </main>
                <footer>rights rserved</footer>
            </React.Fragment>
        );
    }
}

export default App;
