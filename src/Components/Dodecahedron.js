import React, {Component} from 'react';
import '../Styles/Dodecahedron.css';
export default class Dodecahedron extends Component {
    render() {
        return (

            <div class="view">
                <div class="plane main">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
        )
    }
}