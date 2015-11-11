import mui from 'material-ui';

var {Colors, Spacing} =  mui.Styles;

let MuiTheme = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blue500,
    primary2Color: Colors.blue700,
    primary3Color: Colors.blue100,
    accent1Color: Colors.pink400,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
  },
}

export default MuiTheme;