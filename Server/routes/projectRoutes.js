const express = require("express");
const router = express.Router();
const { Project } = require("../models"); // استيراد الموديل

// جلب جميع المشاريع
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "خطأ في جلب المشاريع" });
  }
});

module.exports = router;
