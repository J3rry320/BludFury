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

function randomNumber(){
    let arr = [1,2,3,5,8,10,11,13,15,17,21,23,26]
    let x = arr[Math.floor(Math.random() *arr.length)];
    console.log(x)
    return x;
}
export default class WholeApplication extends Component{
    constructor(props){
        super(props);
        this.state={
          DarkTheme:getMuiTheme(darkBaseTheme),
          WhiteTheme:getMuiTheme(lightBaseTheme),
          number:0,
        }
      }
      
      getInitialState=()=>{
        return { number: 0 }
    }
    componentDidMount(){
    
        this.change();
        setInterval(this.change, 120);
    }
    change=()=>{
        this.setState( {number: randomNumber() } )
    }
    render(){
        return(
<MuiThemeProvider muiTheme={this.state.DarkTheme}>
     <Navbar/>
     <div> 
                    <div className='container'>
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                </div>
                                <div className='container'>
                                <Button number={randomNumber()*1.3} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                </div>
                                <div className='container'>
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                </div>
                                <div className='container'>
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                </div>
                                        <div className='container'>
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                            
                                </div>
                                <div className='container'>
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()*1.5} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                            
                                </div>
                                <div className='container'>
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                            
                                </div>
                                            <div className='container'>
                                <Button number={randomNumber()*2} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                <Button number={randomNumber()} />
                                            
                                </div>
                    </div>
   
     <EventPage/>                         
     </MuiThemeProvider>
        )
    }
}
