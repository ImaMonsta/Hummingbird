import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';   


var {ListItem, Badge, FontIcon, ListDivider } = mui;

var  Index  = mui;




export default class Channel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let style = {};

        if(this.props.channel.selected){
            style.backgroundColor = '#f0f0f0';
        }
        return (
            <div>
                <ListDivider  />
                <ListItem
                    href={'#/chat/' + this.props.channel.key }
                    style={style}
                    rightIcon={
                        <Badge badgeContent={this.props.channel.countSongs} primary={true}>
                            <FontIcon className="material-icons">library_music</FontIcon> 
                        </Badge>
                    }
                    primaryText = {this.props.channel.name}
                    secondaryText = {this.props.channel.description}
                    secondaryTextLines={2}
                />
            </div>
        
        );
    }
}

