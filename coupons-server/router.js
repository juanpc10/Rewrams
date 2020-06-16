const router = require('express').Router();
const controller = require('./controller/dm');
const controller2 = require('./controller/coupon');



router.get('/:user/dms', controller.getDms);
router.post('/:user/dms', controller.postDms);
router.delete('/:user/dms/:id', controller.deleteDm);


router.get('/:user/coupons', controller2.getCoupons);     /// get by id ===>  username ideally
router.post('/:user/coupons', controller2.postCoupons);
router.delete('/:user/coupons/:id', controller2.deleteCoupon);
router.put('/:user/coupons/:id/disc/:num', controller2.changeDiscount);    // change by username, 
router.put('/:user/coupons/:id/max/:num', controller2.changeMaxDiscount);    // change by username
router.put('/:user/coupons/:id/:active', controller2.changeStatus);          // change by username


// // url/user/dms
// router.get('/dms', controller.getDms);
// router.post('/dms', controller.postDms);
// router.delete('/dms/:id', controller.deleteDm);

// // url/user/coupons
// router.get('/coupons', controller2.getCoupons);
// router.post('/coupons', controller2.postCoupons);
// router.delete('/coupons/:id', controller2.deleteCoupon);
// router.put('/coupons/:id/disc/:num', controller2.changeDiscount);
// router.put('/coupons/:id/max/:num', controller2.changeMaxDiscount);
// router.put('/coupons/:id/:active', controller2.changeStatus);



module.exports = router;