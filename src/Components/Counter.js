import React,{Component} from 'react';
import '../App.css';
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            currentDate:this.props.CurrentDate,
           // finalDate:new Date(),
        }
    }
    checkDate=()=>{
        var todayDate=new Date();
var todayDateArray=[todayDate.getDate(),todayDate.getMonth(),todayDate.getYear]
        var finalDate={
            day:17,
            month:"March",
            year:2018,
            setFullYear:function(){
                var date=new Date();
                date.setDate(this.day);
                date.setFullYear(this.year);
                date.setMonth(this.month);
                date.getDate();
                const miliseconds=date.getMilliseconds();
                console.log(date,miliseconds);
            }   
           }
         finalDate.setFullYear();  
        console.log(todayDateArray.map((i)=>
        {
            return(i);
        }
     )
    )
    }
   
    render(){
this.checkDate();

        return(
       <ul><li>Today is Monday</li></ul>
        )
    }
}