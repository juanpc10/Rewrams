const router = require('express').Router();
const controller = require('./controller/dm');
const controller2 = require('./controller/coupon');


router.get('/dms', controller.getDms);
router.post('/dms', controller.postDms);
router.delete('/dms/:id', controller.deleteDm);


router.get('/coupons', controller2.getCoupons);
router.post('/coupons', controller2.postCoupons);
router.delete('/coupons/:id', controller2.deleteCoupon);
router.put('/coupons/:id/disc/:num', controller2.changeDiscount);
router.put('/coupons/:id/max/:num', controller2.changeMaxDiscount);
router.put('/coupons/:id/:active', controller2.changeStatus);


module.exports = router;