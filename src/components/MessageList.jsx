import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import $ from 'jquery';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var {Card, List, CircularProgress,FloatingActionButton, FontIcon} = mui;

@connectToStores
class MessageList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: {}
        };
        
    }
    
    static getStores(){
        return [ChatStore];
    }
    
    static getPropsFromStores(){
        return ChatStore.getState();
    }
    
    onClick(evt){
        console.log(evt);
    }
    
    render(){
        
        let messageNodes = null;
        
        if(!this.props.messagesLoading){
            messageNodes = _.values(this.props.messages).map((message)=> {
                return (
                    <Message key={message.key} message={message} />
                    );
                });    
        }else{
            messageNodes = <CircularProgress mode="indeterminate"
                style={{
                paddingTop: 20,
                paddingBottom: 20,
                margin: '0 auto',
                display: 'block',
                width: '60px'
                }} />;
        }
        
    
      
  
      return (
        <Card style={{
            flexGrow: 2,
            marginLeft: 30  
          }}>
            <List>
                {messageNodes}
            </List>
            
            <FloatingActionButton 
                onClick={this.onClick.bind(this)}
                >
                <FontIcon className="material-icons">file_upload</FontIcon>
            </FloatingActionButton>
            <input id="fileupload" type="file" name="files[]" multiple/>
        </Card>
      );
    }
}

export default MessageList;
