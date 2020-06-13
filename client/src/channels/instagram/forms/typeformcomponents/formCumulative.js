import React, {useState, useContext } from 'react';
import { GlobalContext } from '../../../../context/globalState';



export const FormCumulative = () => {
  const [discountCumulative, handleChangeDiscountCu] = useState('');
  const [maxDiscountCumulative, handleChangemaxDiscountCu] = useState('');
  const { addSingleEvent } = useContext(GlobalContext);


  const onSubmit = e => {
    const URL = "http://localhost:3001/coupons/";


    fetch(URL + '5ededa5e2d55c83afbbadd7b/disc/' + discountCumulative, { method: 'put' })
      .then(res => res.text())
      .then(res => console.log(res))
    
    fetch(URL + '5ededa5e2d55c83afbbadd7b/max/' + maxDiscountCumulative, { method: 'put' })
      .then(res => res.text())
      .then(res => console.log(res));

    //changing status of cumulative coupons to true
    fetch(URL + '5ededa5e2d55c83afbbadd7b/1/', { method: 'put' })
    .then(res => res.text())
    .then(res => console.log(res));

    //changing status of instant coupons to false
    fetch(URL + '5ededa312d55c83afbbadd7a/0/', { method: 'put' })
      .then(res => res.text())
      .then(res => console.log(res));

    let newItemCu = {}
    newItemCu.type = 'cumulative';
    newItemCu.discount = discountCumulative;
    newItemCu.maxDiscount = maxDiscountCumulative;
    newItemCu.active = true;
    addSingleEvent(newItemCu);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <div className='form-input-discount'>
        <p>One-discount</p><input id='cumulative-input1' className='settings-input' type='number' name='discountCumulative' min="0" max="100" autocomplete='off' placeholder={discountCumulative} value={discountCumulative} onChange={(a) => handleChangeDiscountCu(a.target.value)} ></input>
      </div>
      <div className='form-input-discount'>
        <p>Maximum sum of discounts</p><input id='cumulative-input2' className='settings-input' type='number' name='discountCumulative' min="0" max="100" autocomplete='off' placeholder={maxDiscountCumulative} value={maxDiscountCumulative} onChange={(a) => handleChangemaxDiscountCu(a.target.value)} ></input>
      </div>
      <div className='form-button-container'>
        <button type="submit" value="Submit" className='ig-form-data-button'>Change</button>
      </div>
      <div className='form-recommendations'>
        <p>Multiple coupons per user, with max % per user. Recommended for businesses with recurring payments/ services (e.g. gym memberships, online courses)</p>
      </div>
    </form>
  )
}
