import { createApi, toJson } from "unsplash-js";

export default async (req, res) => {
  const { id } = req.query;

  const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_API_CLIENTID,
  });

  const topicPhotoList = await unsplash.topics.getPhotos({
    topicIdOrSlug: id,
    perPage: 30,
  });

  return res.status(200).json({
    topicPhotoList: topicPhotoList.response.results,
  });
};
