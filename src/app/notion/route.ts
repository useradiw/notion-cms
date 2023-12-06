import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const secret = process.env.NOTION_SECRET;
const dbid = process.env.NOTION_DATABASE_ID;

export async function GET( req: Request ) {
    if (!secret || !dbid) return NextResponse.json({message: "Some Environment Variable are missing."}, {status: 500})

    try {
        const notion = new Client({auth: secret})
        const query = await notion.databases.query({
            database_id: dbid,
        })
        return NextResponse.json({body: query.results}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong.", error: error}, {status: 400})
    }
};