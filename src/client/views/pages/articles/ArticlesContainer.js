import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { articlesActions } from '../../../state/ducks/articles';

const ArticleWrapper = styled.div`
    margin: 0.6em;
    padding: 0.8em;
    background-color: #eaeaea;
    border-radius: 10px;
    &:hover {
        background-color: papayawhip;
    }
`;

export class ArticlesContainer extends Component {
    componentDidMount() {
        this.props.articlesActions.fetchArticles();
    }

    render() {
        const { articlesList } = this.props;
        const list =
            articlesList &&
            articlesList.map(article => <ArticleWrapper key={article._id}>{article.title}</ArticleWrapper>);

        return <React.Fragment>{list}</React.Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        articlesList: state.articles.articlesList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        articlesActions: bindActionCreators(articlesActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
