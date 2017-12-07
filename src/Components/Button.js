import React,{Component} from 'react'
function randomNumber(){
	let arr = [1,2,3,5,8,10,11,13,15,17,21,23,26]
	let x = arr[Math.floor(Math.random() *arr.length)];
	console.log(x)
	return x;
}

export default class Button extends Component{
	render(){
		let size = `${this.props.number*4}px`;
		let border = (`${this.props.number }px solid hsla(${this.props.number*30 + (randomNumber()*5)}, 80%, 80%, .8)`)
		let background = `hsla(${this.props.number*3 + (randomNumber()*5)}, 80%, 80%, .8)`
		let divStyle = {
		border: border,
		width: size,
		height:size,
		background: background,
		"box-shadow": `${this.props.number/8}px ${this.props.number/2}px  20px red`,
		"box-shadow": `${this.props.number/4}px ${this.props.number/4}px  50px white`
		}
		return (<div style={divStyle} ></div>)
	}
}