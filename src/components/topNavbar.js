import React from 'react';
import './topNavbar.css';

import '../pictures/fontello/css/fontello.css';

const TopNavbar =()=>{
	return(
		<nav id='topNav' className='f7 w-100 bb--solid'>
			<a href="tel:+48574585772" className='dib pa2 ma2'><div className="icon-phone">+48574585772</div></a>
			<a href="mailto:wyszynska.marz@gmail.com" className='dib pa2 ma2 '><div className="icon-mail">wycenanie.ruchomosci@gmail.com</div></a>
			<a href="https://www.google.pl/maps/place/Wo%C5%82omin/@52.3425749,21.1661625,12z/data=!3m1!4b1!4m5!3m4!1s0x471edabd71454d6b:0x91459e4fb3787983!8m2!3d52.3391162!4d21.2423181"><div className="icon-location" className='dib pa2 ma2'>ul. Sikorskiego 58B Wołomin</div></a>
		</nav>
	);
}

export default TopNavbar;