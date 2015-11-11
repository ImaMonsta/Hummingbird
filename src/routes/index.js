import React from 'react';
import { render } from 'react-dom'
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import Login from '../components/Login.jsx';
import ChatStore from '../stores/ChatStore';


import { Router, Route, IndexRoute } from 'react-router'

function requireAuth(nextState, replaceState) {
    var state = ChatStore.getState();
    if( nextState.location.pathname !== '/login/' && !state.user){
        replaceState({ nextPathname: nextState.location.pathname }, '/login/')
    }
}

render((
    <Router>
        <Route path='/' component={App} onEnter={requireAuth} >
            <IndexRoute component={Chat} />
            <Route path='/chat/:channel' component={Chat} />
            <Route path='/chat/' component={Chat} />
            <Route path='/login/' component={Login}  />
        </Route>
    </Router>
), document.getElementById('container'))
