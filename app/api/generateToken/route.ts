import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const { code } = body;
  const base64EncodedCredentials = btoa(
    `${process.env.NOTION_OAUTH_CLIENT_ID}:${process.env.NOTION_OAUTH_CLIENT_SECRET}`
  );

  const res = await fetch("https://api.notion.com/v1/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      code,
      grant_type: "authorization_code",
      redirect_uri: `${process.env.NOTION_REDIRECT_URI}`,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${base64EncodedCredentials}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
