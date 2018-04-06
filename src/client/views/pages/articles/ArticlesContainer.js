import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { articlesOperations } from '../../../state/ducks/articles';

export class ArticlesContainer extends Component {
    componentDidMount() {
        this.props.articlesOperations.fetchArticles();
    }

    render() {
        const { articlesList } = this.props;
        const list = articlesList && articlesList.map(article => <li key={article._id}>{article.title}</li>);

        return <React.Fragment>{list}</React.Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        articlesList: state.articles.articles.articlesList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        articlesOperations: bindActionCreators(articlesOperations, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
