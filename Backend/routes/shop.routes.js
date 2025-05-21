const express = require("express");
const { body, param } = require("express-validator");
const controller = require("../controller/shop.controller.js");
const { authorizeRoles } = require("../util/middlewares/auth.js");

const router = new express.Router();

const {
  requestValidator,
} = require("../util/middlewares/express-validator.js");

router.get("/", async (req, res) => {
  res.send({
    message: "Shop API",
    success: true,
  });
});

router.get(
  "/shop/:id",
  [param("id", "Invalid seller id").isMongoId(), requestValidator],
  authorizeRoles("admin", "seller"),
  controller.getShop
);

router.get(
  "/shop/:id/earn",
  [param("id", "Invalid seller id").isMongoId(), requestValidator],
  authorizeRoles("admin", "seller"),
  controller.getShopEarnings
);

router.get("/shops", authorizeRoles("admin", "seller"), controller.getShopsOfSeller);

module.exports = router;
