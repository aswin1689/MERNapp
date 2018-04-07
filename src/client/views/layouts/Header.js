import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0.8em;
    background: papayawhip;
    color: palevioletred;
    font-size: 1em;
`;

const Header = ({ title }) => {
    return <Wrapper>{title}</Wrapper>;
};

export default Header;
