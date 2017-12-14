import React,{Component} from 'react';
import '../Styles/Output.css';
export default class AnimatedGalaxy extends Component{
    render(){
        return(
            <div id="galaxy">
            <div class="bg"></div>
            <div class="stars-back"></div>
            <div class="stars-middle"></div>
            <div class="stars-front"></div>
            <div class="bg center"></div>
            </div>
        )
    }
} 