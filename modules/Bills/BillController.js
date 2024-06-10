const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Bill = require('./BillModel');

router.get('/bills', async (req, res) => {
    try {
      const { userId, products } = req.query;

      const newBill = new Bill({
        userId,
        products,
        status: 'Success',
      });
      await newBill.save();
  
      res.status(201).json(newBill);
    } catch (error) {
      console.error('Error creating bill:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;