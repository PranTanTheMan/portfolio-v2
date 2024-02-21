import { NextResponse } from "next/server";
import fetch, { RequestInit } from "node-fetch";

export async function GET() {
  const url =
    "https://api.github.com/search/commits?q=author:prantantheman&sort=author-date&order=desc";
  const headers: RequestInit = {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  };

  const res = await fetch(url, headers);
  const data = await res.json();
  return NextResponse.json(data);
}
