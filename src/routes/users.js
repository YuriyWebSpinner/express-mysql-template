const router = require("express").Router();
const { auth, validator } = require("../middlewares");
const { getUsersHandler, createUserHandler, login, deleteUserHandler, updateUserHandler} = require("../handlers");

/**
 * @swagger
 * /v1/users:
 *   get:
 *     description: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Array of users objects
 *         schema:
 *           type: object
 *           $ref: '#/definitions/User'
 */
router.get("/",
  auth,
  getUsersHandler,
);

/**
 * @swagger
 * /v1/users:
 *   post:
 *     operationId: addUser
 *     description: Create user
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User object
 *         schema:
 *           type: object
 *           $ref: '#/definitions/User'
 */
router.post("/",
  auth,
  validator("user"),
  createUserHandler,
);

/**
 * @swagger
 * /v1/users:
 *   patch:
 *     description: Update user
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/email'
 *       - $ref: '#/parameters/password'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User object
 *         schema:
 *           type: object
 *           $ref: '#/definitions/UserUpdate'
 */
router.patch("/",
  auth,
  validator("update"),
  updateUserHandler,
);

/**
 * @swagger
 * /v1/users:
 *   delete:
 *     description: Delete user
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User object
 *         schema:
 *           type: object
 *           $ref: '#/definitions/User'
 */
router.delete("/",
  auth,
  validator("id"),
  deleteUserHandler,
);


router.post('/login',
  validator("login"),
  login
);

module.exports = router;


/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Users service
 */

/**
 *  @swagger
 *  parameters:
 *    email:
 *      name: email
 *      type: string
 *      in: json
 *    password:
 *      name: password
 *      type: string
 *      in: json
 *    name:
 *      name: name
 *      type: string
 *      in: json
 *    level:
 *      name: level
 *      type: number
 *      in: json
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     required:
 *       - email
 *       - name
 *       - level
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       name:
 *         type: string
 *       level:
 *         type: number
 *   UserUpdate:
 *     required:
 *       - id
 *       - data
 *     properties:
 *       id:
 *         type: number
 *       data:
 *         type: object
 *         properties:
 *           email:
 *             type: string
 *           name:
 *             type: string
 *           level:
 *             type: number
 */
