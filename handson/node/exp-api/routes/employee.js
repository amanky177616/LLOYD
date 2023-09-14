const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/:empId/department/:depId", (req, res) => {
  const id = req.params.empId;
  const depId = req.params.depId;
  res.json({
    message: `GET request to /api/employees:  ${id} and department id is ${depId}`,
  });
});

router.get("/", (req, res) => {
  res.json({
    message: "This is get employee",
  });
});

module.exports = router;