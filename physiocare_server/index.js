const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { authMiddleware } = require("./middlewares/auth.middleware");
const { adminMiddleware } = require("./middlewares/admin.middleware");
