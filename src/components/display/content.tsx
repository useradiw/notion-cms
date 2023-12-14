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
    return (
        <>
            <section className="prose">
                <Markdown remarkPlugins={[remarkGfm, html, emoji]}>{res.body}</Markdown>
            </section>
        </>
    )
};

export default Content;