const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { authMiddleware } = require("./middlewares/auth.middleware");
const { adminMiddleware } = require("./middlewares/admin.middleware");

const authRoutes = require("./routes/auth.route");
app.use("/auth", authRoutes);

const adminRoutes = require("./routes/admins.routes");
app.use("/admin", adminMiddleware, adminRoutes);

const patientRoutes = require("./routes/patients.routes");
app.use("/patient", patientRoutes);

const therapistRoutes = require("./routes/therapists.routes");
app.use("/therapist", therapistRoutes);
