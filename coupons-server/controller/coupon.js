const Coupon = require('../models/coupon');



async function getCoupons (_, res) {
  try {
    const coupons = await Coupon.find();
    res.status(200);
    res.json(coupons);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function postCoupons (req, res) {
  try {
    const { type, discount, maxDiscount, active } = req.body;
    const coupon = Coupon.create( { type, discount, maxDiscount, active } );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}


async function deleteCoupon (req, res) {
  try {
    await Coupon.findByIdAndDelete({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function changeDiscount (req, res) {
  try {
    const disc = Number(req.params.num);
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      { discount: disc },
      { new: true }
    );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function changeMaxDiscount (req, res) {
  try {
    const max = Number(req.params.num);
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      { maxDiscount: max },
      { new: true }
    );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}

async function changeStatus (req, res) {
  try {
    const status = req.params.active;
    const coupon = await Coupon.findByIdAndUpdate(
      { _id: req.params.id },
      { active: status },
      { new: true }
    );
    res.status(200);
    res.json(coupon);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}



module.exports = {
  getCoupons,
  postCoupons,
  deleteCoupon,
  changeDiscount,
  changeMaxDiscount,
  changeStatus
};