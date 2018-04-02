import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App should render properly', () => {
    const wrap = shallow(<App name="Aswin" />);

    //expect(wrap.text()).toEqual('Hello Aswin');
    expect(wrap).toMatchSnapshot();
});
