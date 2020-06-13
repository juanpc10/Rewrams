import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar () {
  return (
    <div className='navBar'>
      <div className="left-side-nav">
        <Link to='/dashboard'>
          <button>
            <img src='https://seguidores.online/wp-content/uploads/2019/08/dm-en-instagram.png' alt='rewrams-logo'></img>
          </button>
        </Link>
        <Link to='/dashboard'>
          <a href='/dashbord'>Rewrams</a>
        </Link>
      </div>

      <div className='right-side-nav'>
        <Link to='/dashboard'>
          <button>Home</button>
        </Link>
        <Link to='/instagram'>
          <button>Admin</button>
        </Link>
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/more'>
          <button>More</button>
        </Link>
      </div>

    </div> 
  )
}

export default NavBar;