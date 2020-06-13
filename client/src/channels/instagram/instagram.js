import React from 'react';
import './instagram.css';

import AdminPanel from './forms/adminPanel';
import CardType from './forms/typeformcomponents/cardType';


function Instagram () { 
  return (
    <>
      <div className='instagram-page'>
        
        <div className='ig-header'>
          <h2>Instagram Campaign</h2>
        </div>

        <div className='ig-pagebody'>
          <div className='left'> 
          <p className='ig-campaign-instruction'>Choose a campaign and click change to modify your current Campaign Settings</p>
            <AdminPanel />
          <p className='ig-campaign-footer'>Campaigns are linked to Instagram stories only for the moment</p>
          </div>
          <div className='right'>
            <p>Current active campaign</p>
            <CardType />
          </div>
        </div>
      </div> 
    </>
  )
}

export default Instagram;
