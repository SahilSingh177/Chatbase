import { NextRequest, NextResponse } from "next/server";

interface RichText {
  text?: {
    content: string;
  };
}

interface Block {
  type: string;
  paragraph?: {
    rich_text?: RichText[];
  };
  bulleted_list_item?: {
    rich_text?: RichText[];
  };
  callout?: {
    rich_text?: RichText[];
  };
  code?: {
    rich_text?: RichText[];
  };
  heading_1?: {
    rich_text?: RichText[];
  };
  heading_2?: {
    rich_text?: RichText[];
  };
  heading_3?: {
    rich_text?: RichText[];
  };
  numbered_list_item?: {
    rich_text?: RichText[];
  };
  quote?: {
    rich_text?: RichText[];
  };
  template?: {
    rich_text?: RichText[];
  };
  to_do?: {
    rich_text?: RichText[];
  };
  toggle?: {
    rich_text?: RichText[];
  };
}

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
  console.log(res);
  const data = await res.json();
  const pageIds = data.results.map((page:any) => page.id);
  let text = "";
  for (const pageId of pageIds) {
    const pageBlocksRes = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Notion-Version": "2022-02-22",
        },
      }
    );

    const pageBlocksData = await pageBlocksRes.json();
    text += logBlockTextContent(pageBlocksData.results);
  }
  return NextResponse.json(text);
}

function logBlockTextContent(blocks: Block[]) {
  let textContent = "";

  blocks.forEach((block) => {
    if (block.type === "paragraph" && block.paragraph?.rich_text) {
      block.paragraph.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          console.log(richText.text.content)
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (
      block.type === "bulleted_list_item" &&
      block.bulleted_list_item?.rich_text
    ) {
      block.bulleted_list_item.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "callout" && block.callout?.rich_text) {
      block.callout.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "code" && block.code?.rich_text) {
      block.code.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "heading_1" && block.heading_1?.rich_text) {
      block.heading_1.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "heading_2" && block.heading_2?.rich_text) {
      block.heading_2.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "heading_3" && block.heading_3?.rich_text) {
      block.heading_3.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (
      block.type === "numbered_list_item" &&
      block.numbered_list_item?.rich_text
    ) {
      block.numbered_list_item.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "quote" && block.quote?.rich_text) {
      block.quote.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "template" && block.template?.rich_text) {
      block.template.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "to_do" && block.to_do?.rich_text) {
      block.to_do.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    } else if (block.type === "toggle" && block.toggle?.rich_text) {
      block.toggle.rich_text.forEach((richText) => {
        if (richText.text && richText.text.content) {
          textContent += richText.text.content;
          textContent += "\n";
        }
      });
    }
  });

  return textContent;
}
