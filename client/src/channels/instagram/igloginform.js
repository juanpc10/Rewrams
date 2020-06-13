import React from 'react';



export const IgLoginForm = (props) => {

  return (
    <form className='right'>
      <h5>Social media connection</h5>
      <div className='ig-connection'>
        <p>Username:</p><input></input><p>juanpc10</p>
      </div>
      <div className='ig-connection' id='password'>
        <p>Password:</p><input></input><p>*************</p>
      </div>
      <p className='ig-connection-info'>Data is encrypted, secured, and only available to you</p>
      <button>Change</button>
    </form>
  )
}
