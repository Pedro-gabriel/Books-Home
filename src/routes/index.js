'use strict';

const express = require('express');
const router = express.Router ();

router.get('/', (res, req, next) => {
    res.status(200).send({
        title: "Node store api",
        version: "0.0.1",
        dia: "02"
    });
});

module.exports = router;