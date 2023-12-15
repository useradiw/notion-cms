import html from "remark-html";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import Markdown from "react-markdown";

interface pageProps {
    pageid: string,
}
const Content = async ({pageid}: pageProps) => {
    const req = await fetch(`http://localhost:3000/notion/pages/${pageid}`, {cache: "no-store"});
    const res = await req.json();
    const head = res.head;
    const date = new Date(head.created);
    return (
        <>
            <section>
                <h1 className="text-xl text-slate-900 font-extrabold">{head.title}</h1>
                <div className="flex flex-row gap-2">
                    {head.tags.map((item: string, i: number) => 
                        <h6 className="text-sm border rounded-md px-2 bg-slate-300" key={i}>{item}</h6>
                    )}
                </div>
                <h5>{date.toUTCString()}</h5>
                <h2>{head.highlight}</h2>
            </section>
            <section className="prose">
                <Markdown remarkPlugins={[remarkGfm, html, emoji]}>{res.body}</Markdown>
            </section>
        </>
    )
};

export default Content;