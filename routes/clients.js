const express = require('express');
const router = express.Router();
const config = require('../dbconfig');
const sql = require('mssql');

router.get('/', async (req, res, next) => {
  try {
    const pool = await sql.connect(config);
    const clients = await pool.request().query("select * from Clients");
    res.json(clients.recordsets[0]);
  }
  catch (error) {
    console.log(error);
  }
});

module.exports = router;
