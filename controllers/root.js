const express = require('express');
const router = express.Router();
const multer = require('multer');

const uploadAudio = multer({ dest: 'uploads/audio' })

const uploadPhoto = multer({ dest: 'uploads/photo' })

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'Express server running' });
});


router.post('/photo', uploadPhoto.single('photo'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.status(200).json({ msg: 'Upload photo' });
})

router.post('/audio', uploadAudio.single('audio'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.status(200).json({ msg: 'Upload audio' });
})

module.exports = router;