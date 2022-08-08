import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Group3 from '../../assets/images/Group 3.png';
import Group2 from '../../assets/images/Group 2.png';
import Group5 from '../../assets/images/Group 5.png';
import Thumbnail1 from '../../assets/images/Thumbnail 1.png';
import Thumbnail2 from '../../assets/images/Thumbnail 2.png';
import Thumbnail3 from '../../assets/images/Thumbnail 3.png';
import Models from '../Model';

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <header style={{
        background: '#fff',
        boxShadow: '0 5px 15px rgb(0 0 0 / 10%)'
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 30px',
          textAlign: 'center',
          padding: '15px'
        }}
        >
          <Models show={show} setShow={setShow} />
          <div onClick={handleShow} className="navbar-link"><img src={Group3} alt='' width={100} /></div>
          <div onClick={handleShow} className="navbar-link"><img src={Group2} alt='' width={100} /></div>
          <div onClick={handleShow} className="navbar-link"><img src={Group5} alt='' width={100} /></div>
        </nav>
      </header>

      <div className='banner'>
        <img src={Thumbnail3} alt='' />
        <img src={Thumbnail2} alt='' />
        <img src={Thumbnail1} alt='' />
      </div>
    </div>
  )
}

export default Header;