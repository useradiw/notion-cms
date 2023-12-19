import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const secret = process.env.NOTION_SECRET;

export async function GET( req: Request, { params }: { params: { pageid: string} } ) {
    const pageid = params.pageid;
    if (!secret || !pageid) return NextResponse.json({message: "Some Environment Variable are missing."}, {status: 500})

    try {
        const notion = new Client({auth: secret});
        const query = await notion.pages.retrieve({
            page_id: pageid,
        }) as fetchData;
        const data = {
            cover: query.cover.external.url,
            created: query.properties.Created.date.start,
            title: query.properties.Title.title[0].text.content,
            highlight: query.properties.Highlight.rich_text[0].text.content,
            tags: query.properties.Tags.multi_select.map((item) => item.name),
            author: query.properties.Author.rich_text[0].text.content,
        };
        const n2m = new NotionToMarkdown({ notionClient: notion });
        const mdblocks = await n2m.pageToMarkdown(pageid);
        const mdString = n2m.toMarkdownString(mdblocks);
        return NextResponse.json({head: data, body: mdString.parent}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Something went wrong.", error: error}, {status: 400})
    }
};