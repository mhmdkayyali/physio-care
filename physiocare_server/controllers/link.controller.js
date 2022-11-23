const db = require("../config/db.config");

const getAllLinks = async (req, res) => {
  try {
    const link = await db.meeting_links.findMany({});
    return res.json(link);
  } catch (e) {
    res.send(e.message);
  }
};
