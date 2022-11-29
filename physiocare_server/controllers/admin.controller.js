// const express, {request, response} = require("express")
const db = require("../config/db.config");

const getAllAdmins = async (req, res) => {
  try {
    const admins = await db.users.findMany({
      where: {
        user_type: "ADMIN",
      },
    });
    return res.json(admins);
  } catch (e) {
    res.send(e.message);
  }
};

const getAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await db.users.findFirst({
      where: {
        user_type: "ADMIN",
        id: parseInt(id),
      },
    });
    return res.json(admin);
  } catch (e) {
    res.send(e.message);
  }
};

const createAdmin = async (req, res) => {
  try {
    const data = req.body;
    const createdAdmin = await db.users.create({
      data: {
        ...data,
        dob: new Date(req.body.dob),
      },
    });
    return res.json(createdAdmin);
  } catch (e) {
    res.send(e.message);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const updatedAdmin = await db.users.update({
      where: {
        id,
      },
      data: {
        ...data,
        dob: new Date(req.body.dob),
      },
    });
    return res.json(updatedAdmin);
  } catch (e) {
    res.send(e.message);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedAdmin = await db.users.delete({
      where: {
        id,
      },
    });
    return res.json({
      Response: "Success",
    });
  } catch (e) {
    res.status(500).send;
  }
};

module.exports = {
  getAllAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
