import React,{Component} from 'react'
import '../App.css';
import Button from './Button'
import Navbar from './Navbar'
import Slider from './Carousel'
import EventPage from './EventPage'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AnimatedGalaxy from './AnimatedGalaxy';


export default class WholeApplication extends Component{
    constructor(props){
        super(props);
        this.state={
          DarkTheme:getMuiTheme(darkBaseTheme),
          WhiteTheme:getMuiTheme(lightBaseTheme),
          number:0,
        }
      }
      
    
 render(){
    return(
     <MuiThemeProvider muiTheme={this.state.DarkTheme}>
      <Navbar/>
      <AnimatedGalaxy/>
      <EventPage/>                         
     </MuiThemeProvider>
    )
   }
}