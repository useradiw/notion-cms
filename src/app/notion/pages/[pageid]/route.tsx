import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const secret = process.env.NOTION_SECRET;

export async function GET( req: Request, { params }: { params: { pageid: string} } ) {
    const pageid = params.pageid;
    if (!secret || !pageid) return NextResponse.json({message: "Some Environment Variable are missing."}, {status: 500})

    try {
        const notion = new Client({auth: secret})
        const query = await notion.blocks.children.list({
            block_id: pageid,
        })
        return NextResponse.json({body: query}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong.", error: error}, {status: 400})
    }
};