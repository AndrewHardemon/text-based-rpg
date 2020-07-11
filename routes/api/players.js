const router = require("express").Router();
const playerController = require("../../controllers/playerController");

// Creating user and finding all users
router.route("/")
  .get(playerController.findAll)
  .post(playerController.create)

// For getting a specific user and updating or removing
router.route("/:id")
  .get(playerController.findByName)
  .put(playerController.update)
  .delete(playerController.remove)

module.exports = router;
