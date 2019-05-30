import React, {Component} from 'react';
//import Login from './login/containers/login';
import MContainer from './sections/containers/main-container';
import Home from './home/containers/home';

class AppLayout extends Component {
    render(){
        return (
            <MContainer>
                <Home />
            </MContainer>
        );
    }
}

export default AppLayout;
