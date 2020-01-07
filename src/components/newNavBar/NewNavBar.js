import React, { Component } from 'react';
import EpicMenu from './EpicMenu';

import logo from './logo.png';

class NewNavBar extends Component {
  render() {
    let links = [
      { label: 'START', link: '#home', active: true },
      { label: 'OFERTA', link: '#oferta' },
      { label: 'CENNIK', link: '#cennik' },
      { label: 'BIURO', link: '#portfolio' },    
      { label: 'KONTAKT', link: '#contact-us' },
    ];

    return (
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
      </div>
    );
  }
}

export default NewNavBar;
