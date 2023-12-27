import html from "remark-html";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import Markdown from "react-markdown";
import Image from "next/image";
import Tags from "@/components/tags";

interface pageProps {
    pageid: string,
}
const Content = async ({pageid}: pageProps) => {
    const req = await fetch(`http://localhost:3000/notion/pages/${pageid}`, {cache: "no-store"});
    const res = await req.json();
    const head = res.head;
    return (
        <>
            <section className="bg-slate-100/70 mb-8">
                <div>
                    <Image 
                        src={head.cover}
                        alt="Cover Image"
                        width={400}
                        height={400}
                        style={{
                            aspectRatio: "16:9",
                        }}
                        className="object-scale-down w-full"
                    />
                </div>
                <h1 className="text-5xl text-slate-900 font-extrabold text-center mt-2">{head.title}</h1>
                <div className="flex flex-row gap-2 mt-2 justify-center items-center">
                    {head.tags.map((item: string, i: number) => 
                        <Tags key={i} text={item} />
                    )}
                </div>
                <h2 className="font-semibold text-lg mt-2">{head.highlight}</h2>
                <h5 className="text-center font-semibold mt-2">{head.author}</h5>
                <h5 className="text-center mt-2 text-sm text-slate-700">{head.created}</h5>
                <div className="mt-4 prose">
                    <Markdown remarkPlugins={[remarkGfm, html, emoji]}>{res.body}</Markdown>
                </div>
            </section>
        </>
    )
};

export default Content;