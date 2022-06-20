const router = require("express").Router()
let products_controller = require("../controllers/products")

router.get("/", products_controller.index)
    .get("/mens", products_controller.mens)
    .get("/womens", products_controller.womens)

module.exports = router