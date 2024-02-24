const express = require("express");
const controller = require("../controllers/contactController");
const { verifyToken } = require("../authVerify/auth-verify");

const router = express.Router();

router.post("/contact", controller.AddContact);
router.get("/contacts/", verifyToken, controller.GetContacts);
router.get("/contact/:id", verifyToken, controller.GetContact);
router.put("/contact/:id", controller.UpdateContact);
router.delete("/contact/:id", controller.DeleteContact);

module.exports = router;
