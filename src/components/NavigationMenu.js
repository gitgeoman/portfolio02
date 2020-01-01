import React from 'react';

import './NavigationMenu';

const NavigationMenu =()=>{
	return(
				<nav className='flex items-center f5 black bg-light-blue '>
				<div id='menu-div' className='dib pa2 ma2'>START</div>
				<div id='menu-div' className='dib pa2 ma2'>WYCENA NIERUCHOMOŚCI</div>
				<div id='menu-div' className='dib pa2 ma2'>CENNIK</div>
				<div id='menu-div' className='dib pa2 ma2'>PROCES WYCENY</div>
				<div id='menu-div' className='dib pa2 ma2'>O BIURZE</div>
				<div id='menu-div' className='dib pa2 ma2'>KONTAKT</div>
				
			</nav>

		);
}
export default NavigationMenu;