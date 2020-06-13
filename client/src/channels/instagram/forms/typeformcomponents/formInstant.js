import React, {useState, useContext } from 'react';
import { GlobalContext } from '../../../../context/globalState';




export const FormInstant = () => {
  const [discountInstant, handleChangeDiscountIn] = useState('');
  // const [maxDiscountInstant, handleChangemaxDiscountIn] = useState('');
  const { addSingleEvent } = useContext(GlobalContext);

  const onSubmit = e => {
    const URL = "http://localhost:3001/coupons/";
 
      fetch(URL+ '5ededa312d55c83afbbadd7a/disc/' + discountInstant, { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res))
      
      fetch(URL + '5ededa312d55c83afbbadd7a/max/' + discountInstant, { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res));

      //changing status of instant coupons to true
      fetch(URL + '5ededa312d55c83afbbadd7a/1/', { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res));

      //changing status of cumulative coupons to false
      fetch(URL + '5ededa5e2d55c83afbbadd7b/0/', { method: 'put' })
        .then(res => res.text())
        .then(res => console.log(res));
      
      let newItemCu = {}
      newItemCu.type = 'instant';
      newItemCu.discount = discountInstant;
      newItemCu.maxDiscount = discountInstant;
      newItemCu.active = true;
      addSingleEvent(newItemCu);  

    }
  return (
    <form onSubmit={onSubmit}>
      <div className='form-input-discount'>
        <p>Discount</p><input id='instant-input1' className='settings-input' type='number' name='discountInstant' min="0" max="100" autocomplete='off' placeholder={discountInstant} value={discountInstant} onChange={(a) => handleChangeDiscountIn(a.target.value)} ></input>
      </div>
      <div className='max-disc'>
        <p></p>
      </div>
      <div className='form-button-container'>
        <button type="submit" value="Submit" className='ig-form-data-button'>Change</button>
      </div>
      <div className='form-recommendations'>
        <p>One coupon per user, one discount %. Recommended for businesses with instant payments/ products (e.g. restaurants, online clothing stores)</p>
      </div>
    </form>
  )
}
