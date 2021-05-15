import { createApi, toJson } from "unsplash-js";

export default async (_, res) => {
  const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_API_CLIENTID,
  });

  const topicList = await unsplash.topics.list({
    page: 2,
    perPage: 10,
  });

  return res.status(200).json({
    topicList: topicList.response.results,
  });
};
