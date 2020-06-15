const Dm = require('../models/dm');

async function getDms (_, res) {
  try {
    const dms = await Dm.find();
    res.status(200);
    res.json(dms);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function postDms (req, res) {
  try {
    const { username, full_name, lastMessage } = req.body;
    const dm = Dm.create( { username, full_name, lastMessage } );
    res.status(200);
    res.json(dm);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function deleteDm (req, res) {
  try {
    await Dm.findByIdAndDelete({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}






module.exports = {
  getDms,
  postDms,
  deleteDm
};