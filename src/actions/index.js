import alt from '../alt';
import Firebase from 'firebase';

class Actions{
    constructor(){
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed',
            'messagesLoading',
            'sendMessage',
            'messageSendSuccess',
            'messageSendError',
            'messageReceived',
            'messageError'
        );
    }
    
    login(history){
        return (dispatch) => {
            var firebaseRef = new Firebase('https://hummingbird.firebaseio.com/');
            firebaseRef.authWithOAuthPopup('google', (error, user)=>{
                if(error){
                    return;
                }
                
                dispatch(user);
                
                    history.pushState(null,'/chat/');
                
            });
        }
    }
}

export default alt.createActions(Actions);