const router = require('express').Router();
const Cliente = require('../models/cliente');

router
  .route('/')
  .get((req, res) => {
    Cliente.find()
      .then(clientes => res.json({ status: true, clientes }))
      .catch(err => {
        console.log(err);
        res.json({ status: false, err });
      });
  })
  .post((req, res) => {
    Cliente.create(req.body)
      .then(cliente => res.json({ status: true, cliente }))
      .catch(err => {
        console.log(err);
        res.json({ status: false, err });
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    Cliente.findById(req.params.id)
      .then(cliente => res.json({ status: true, cliente }))
      .catch(err => {
        console.log(err);
        res.json({ status: false, err });
      });
  })
  .put((req, res) => {
    Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(cliente => res.json({ status: true, cliente }))
      .catch(err => {
        console.log(err);
        res.json({ status: false, err });
      });
  })
  .delete((req, res) => {
    Cliente.findByIdAndRemove(req.params.id)
      .then(resp => res.json({ status: true }))
      .catch(err => {
        console.log(err);
        res.json({ status: false, err });
      });
  });

module.exports = router;
