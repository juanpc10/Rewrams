const router = require('express').Router();
const controller = require('./controller/dm');
const controller2 = require('./controller/coupon');




router.get('/dms/:user', controller.getDms);
router.post('/dms/:user', controller.postDms);
router.delete('/dms/:user/:id', controller.deleteDm);


router.get('/coupons/:user', controller2.getCoupons);
router.post('/coupons/:user', controller2.postCoupons);
router.delete('/coupons/:user/:id', controller2.deleteCoupon);
router.put('/coupons/:user/:id/disc/:num', controller2.changeDiscount);
router.put('/coupons/:user/:id/max/:num', controller2.changeMaxDiscount);
router.put('/coupons/:user/:id/:active', controller2.changeStatus);



module.exports = router;