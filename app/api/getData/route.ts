import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.access_token) {
    return NextResponse.json(
      { error: "Missing access_token" },
      { status: 400 }
    );
  }

  const { access_token } = body;

  const res = await fetch("https://api.notion.com/v1/search", {
    method: "POST",
    headers: {
      "Notion-Version": "2022-06-28",
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
