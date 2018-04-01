import React from 'react';

type Props = {
    name: number
};

const App = (props: Props) => {
    return <div>Hello {props.name}</div>;
};

export default App;
