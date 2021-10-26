const router = require("express").Router();

const { auth, validator } = require("../middlewares");
const { getUsers, login } = require("../handlers");

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get list of users
 *     responses:
 *       200:
 *         description: Returns a array of users.
 */
router.get("/",
  auth,
  getUsers,
);

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login user
 *     parameters:
 *      email: user email
 *      password: user password
 *     responses:
 *       200:
 *         description: Returns id, login and token
 */
router.post('/login',
  validator("login"),
  login
);

module.exports = router;
