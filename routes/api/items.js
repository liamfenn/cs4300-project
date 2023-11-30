const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({noitemfound: 'No Item Found' }));
});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({noitemfound: 'No Item Found' }));
});
router.post('/', (req, res) => {
    Item.create(req.body)
    .then((item) => res.json({ msg: 'Item added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this item' }))
});
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: 'Updated Successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update the database.' }));
});
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json({ msg: 'Item entry deleted Successfully' }))
    .catch((err) => res.status(400).json({ error: 'No such item exists' }));
});

module.exports = router;