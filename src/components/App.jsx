
import React from 'react';
import mui from 'material-ui';
import MyRawTheme from '../configuration/MaterialUITheme.jsx';
import {RouterHandler} from 'react-router';
   

  
var {ThemeManager, LightRawTheme, Colors} =  mui.Styles;
var { AppBar} = mui;

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            muiTheme  : ThemeManager.getMuiTheme(LightRawTheme)
        }
    }
    
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }
    
    getChildContext(){
        return {
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
        };
    }
    
    render(){
        return (
          <div>
            <AppBar title="Hummingbird" />
            {this.props.children}
          </div>
        );
    }
  }
  
  export default App;
