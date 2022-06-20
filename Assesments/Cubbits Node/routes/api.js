const router = require("express").Router()
let api_controller = require("../controllers/api")

router.get("/", api_controller.index)
    .get("/", api_controller.users)
    .get("/", api_controller.index)

module.exports = router