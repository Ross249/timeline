import { NextApiRequest, NextApiResponse } from "next";
import { sampleInfoData } from "../../../public/content";
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleInfoData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(sampleInfoData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
