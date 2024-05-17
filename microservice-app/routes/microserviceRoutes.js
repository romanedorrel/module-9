const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/microserviceController");

router.get("/:id", (req, res) => {
    Controllers.getData(req,res);
})

router.put("/:id", (req,res) =>{
    Controllers.updateData(req, res);
})

module.exports = router;