import React from 'react';
import {Route} from 'react-router'
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';  
import ChatStore from '../stores/ChatStore';

class Chat extends React.Component {
    
    render(){
        return (
                <div>
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                        }}>
                        <ChannelList {...this.props} />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            );
    }
    
   
}

export default Chat;