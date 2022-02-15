import { NextApiRequest, NextApiResponse } from "next";

export default function HelloApi(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello" });
}
