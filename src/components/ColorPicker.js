import React, {Component} from 'react';
import './colorPicker.css'

class ColorPicker extends Component {
	constructor(props){
		super(props);
		this.state = {
			color1:"#bbbbbb",
			color2:"#ffffff"
		}
	}

	onColorPick=(event)=>{
		console.log(this.state.color1);

	};

	render(){
		return(
			<div id="gradient">
				<h3>Background generator</h3>
				<input id='0' type="color" name="color1" onClick={(evt)=>this.setState({color1:evt.target.value})}/>

				<br/><br/>
				<button id="rdm">Randomise</button>
			</div>
		)

	}
	
}


export default ColorPicker;