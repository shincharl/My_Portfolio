import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = "shincharl";
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();

  const projects = data.map((repo: any) => ({
    name: repo.name,
    url: repo.html_url,
    image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
  }));

  res.status(200).json(projects);
}
