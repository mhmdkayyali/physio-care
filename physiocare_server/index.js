const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));

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

const appointmentRoutes = require("./routes/appointments.routes");
app.use("/appointment", appointmentRoutes);

const linkRoutes = require("./routes/links.routes");
app.use("/link", linkRoutes);

app.get("/video", (req, res) => {
  res.sendFile(`videosdk/index.html`, { root: __dirname });
});

const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));

require("./config/db.config");
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${process.env.PORT}`);
  }
});
