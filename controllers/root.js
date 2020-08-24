const express = require('express');
const router = express.Router();
const multer = require('multer');

const audioStorage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'uploads/audio') },
  filename: (req, file, cb) => { cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`) },
});

const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'uploads/photo') },
  filename: (req, file, cb) => { cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`) },
});

const uploadAudio = multer({ storage: audioStorage });

const uploadPhoto = multer({ storage: photoStorage });

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