const { response } = require('express');
const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then(oneProduct => res.json({ product: oneProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedProduct => res.json({ product: updatedProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}