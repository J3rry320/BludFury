import React,{Component} from 'react'
import '../App.css';
import Navbar from './Navbar'
import Slider from './Carousel'
import EventPage from './EventPage'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import WhatsHot from 'material-ui/svg-icons/social/whatshot'
export default class WholeApplication extends Component{
    constructor(props){
        super(props);
        this.state={
          DarkTheme:getMuiTheme(darkBaseTheme),
          WhiteTheme:getMuiTheme(lightBaseTheme),
        }
      }
    render(){
        return(
<MuiThemeProvider muiTheme={this.state.DarkTheme}>
     <Navbar/>
     <Slider/> 
     <span><WhatsHot style={{alignItems:"center"}}
      hoverColor="red"
     /><h2>Events</h2>
     </span>
     <EventPage/>                         
     </MuiThemeProvider>
        )
    }
}