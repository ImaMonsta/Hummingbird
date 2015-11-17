import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://hummingbird.firebaseio.com/albums');

let ChannelSource = {
    getChannels: {
        remote(state, selectedChannelKey){
            return new Promise((resolve,reject)=>{
                firebaseRef.once('value', (dataSnapshot)=> {
                   var channels = dataSnapshot.val();
                   
                   
                   dataSnapshot.forEach((each) => {
                       channels[each.key()].countSongs = each.child('songs').numChildren()
                       //console.log(each.child('songs').numChildren());
                   });
                   selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
                   var selectedChannel = channels[selectedChannelKey];
                   if(selectedChannel){
                       selectedChannel.selected = true;
                   }
                   resolve(channels);
                });
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
}

export default ChannelSource;