const db = require("../config/db.config");
const crypto = require("crypto");
const fs = require("fs");

const getAllTherapists = async (req, res) => {
  try {
    const therapists = await db.users.findMany({
      where: {
        user_type: "THERAPIST",
      },
      include: {
        therapist_additional_informations: true,
      },
    });

    return res.json(therapists);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getTherapist = async (req, res) => {
  try {
    const { id } = req.params;
    const therapist = await db.users.findFirst({
      where: {
        user_type: "THERAPIST",
        id: parseInt(id),
      },
      include: {
        therapist_additional_informations: true,
      },
    });
    return res.json(therapist);
  } catch (e) {
    res.send(e.message);
  }
};

const createTherapist = async (req, res) => {
  const { specialty, profile_picture, ...data } = req.body;
  const createdTherapist = await db.users.create({
    data: {
      ...data,
      dob: new Date(req.body.dob),
      therapist_additional_informations: {
        create: {
          specialty,
          profile_picture,
        },
      },
    },
  });
  return res.json(createdTherapist);
};

const updateTherapist = async (req, res) => {
  const { id, specialty, ...data } = req.body;

  const profile_picture =
    req.body.therapist_additional_informations.profile_picture;

  const isPicture = profile_picture.length > 1000;

  let profile_picture_url = null;

  console.log(isPicture);
  if (isPicture) {
    const image_id = crypto.randomBytes(16).toString("hex");
    const base64Data = profile_picture.replace("data:image/png;base64,", "");
    const new_image = Buffer.from(base64Data, "base64");

    fs.writeFile(
      __dirname.replace("controllers", "public/") + image_id + ".png",
      new_image,
      (err) => {
        console.log(err);
      }
    );

    profile_picture_url = image_id + ".png";
  }
  const updatedTherapist = await db.users.update({
    data: {
      ...data,
      dob: req.body.dob ? new Date(req.body.dob) : undefined,
      pt_additional_informations: undefined,
      therapist_additional_informations: {
        update: {
          specialty,
          profile_picture: isPicture ? profile_picture_url : profile_picture,
        },
      },
    },
    where: {
      id: parseInt(id),
    },
  });

  const additional = await db.therapist_additional_informations.findFirst({
    where: {
      users_id: parseInt(id),
    },
  });

  return res.json(additional.profile_picture);
};

const deleteTherapist = async (req, res) => {
  const { id } = req.body;
  await db.users.delete({
    where: {
      id,
    },
  });
  return res.json({
    Response: "Success",
  });
};
module.exports = {
  getAllTherapists,
  getTherapist,
  createTherapist,
  updateTherapist,
  deleteTherapist,
};
