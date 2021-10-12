/** @format */

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { fileName } = req.query;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=100000000, stale-while-revalidate=59"
  );
  res.setHeader("Content-Type", "application/json");

  const filePath = path.resolve("./data/echarts/json", fileName + ".json");
  const fileBuffer = fs.readFileSync(filePath);

  res.send(fileBuffer);
}
