import Unsplash, { toJson } from "unsplash-js";

export default (req, res) => {
  //res.status(200).json({ name: "Lincoln" });

  return new Promise((resolve) => {
    const topics = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });
  });
};
