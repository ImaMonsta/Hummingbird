import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

const { array, func, object } = React.PropTypes

var {
    Card,
    CardText,
    RaisedButton
} = mui;


class Login extends React.Component {

    onClick(evt){
      Actions.login(this.props.history);
    }
    
    static defaultProps = {
        createElement: React.createElement
    }
    
    static childContextTypes = {
        history: object.isRequired,
        location: object.isRequired
    }
    
    getChildContext() {
        return {
            history: this.props.history,
            location: this.props.location
        }
    }

    render(){

        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                Review your music storage, please log in with your Google account.
              </CardText>

              <RaisedButton 
                style={{ display: 'block'}}
                onClick={this.onClick.bind(this)}
              label="Log in with Google" primary={true} />
            </Card>

        );
    }
}


module.exports = Login;
