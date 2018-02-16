const MirrorOrder = require('../models/mirrorOrder');


module.exports = {
    
    getOrders(req, res, next) {
        MirrorOrder.find({})
        .then(orders => res.send(orders))
        .catch(next); 
    },
    createOrder(req, res, next) {
        const orderProps = req.body;
        
        MirrorOrder.create(orderProps)
        .then(order => res.send(order))
        .catch(next);  
    },
    getOrderFromWalletAddress(req, res, next) {
        const wAddress = req.params.address;

        MirrorOrder.find({ walletAddress: wAddress })
        .then(order => res.send(order))
        .catch(next); 
    },
    getOrderFromEmail(req, res, next) {
        const eAddress = req.params.email;

        MirrorOrder.find({ emailAddress: eAddress })
        .then(order => res.send(order))
        .catch(next); 
    }

};