import React,{Component} from 'react'

import {Carousel} from 'react-responsive-carousel'
import {ReactCountdownClock} from 'react-countdown-clock';
import 'react-responsive-carousel/lib/styles/carousel.css'
import One from '../Images/4.jpg'
import Two from '../Images/5.jpg'
import Three from '../Images/6.jpg'


export default class Slider extends Component{
 
render(){
				const date=new Date();
				 var miliSeccond=date.getMilliseconds();
				 const NewDate=new Date()
				 NewDate.setFullYear(2018,2,17)
				 var finalMiliScnds=NewDate.getMilliseconds();
				 var secondsProp=finalMiliScnds-miliSeccond;
	return(
		<Carousel
		showArrows={true}
		infiniteLoop={true}
		autoPlay={true}
		useKeyboardArrows={true}
		showStatus={false}
		
		showThumbs={false}
		
		>
			 <div>
					<img src={One} />
			<p className="legend"> Hello WOrld</p></div>
				<div>
					<img src={Two}  />
					<p className="legend">{secondsProp}</p>
				</div>
				<div>
					<img src={Three}  />
					<p className="legend">Legend 3</p>
				</div>
		</Carousel>
	)


}
}
