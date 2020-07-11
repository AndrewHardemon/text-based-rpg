const router = require("express").Router();
const playerRoutes = require("./players");

// Player Routes
router.use("/players", playerRoutes);

module.exports = router;