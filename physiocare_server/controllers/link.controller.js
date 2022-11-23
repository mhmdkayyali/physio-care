const db = require("../config/db.config");

const getAllLinks = async (req, res) => {
  try {
    const link = await db.meeting_links.findMany({});
    return res.json(link);
  } catch (e) {
    res.send(e.message);
  }
};

const getLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await db.meeting_links.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return res.json(link);
  } catch (e) {
    res.send(e.message);
  }
};

const updateLink = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    const updatedLink = await db.meeting_links.update({
      data: { ...data },
      where: {
        id,
      },
    });
    return res.json(updatedLink);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  getAllLinks,
  getLink,
  updateLink,
};
