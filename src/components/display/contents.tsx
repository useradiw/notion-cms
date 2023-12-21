import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    const req = await fetch("http://localhost:3000/notion/", {cache: "no-store"});
    const res = await req.json();
    return res;
};

const Contents = async () => {
    const values = await getData();
    const data: fetchData[] = values.body;
    const display = data.map((item, i) => (
        <div className="flex flex-col border-2 border-slate-300 rounded-md" key={i}>
            <div className="max-h-[30svh] overflow-hidden rounded-t-md">
                <Image 
                    src={item.cover.external.url}
                    alt="Cover Image"
                    width={200}
                    height={200}
                    style={{
                        aspectRatio: "16:9",
                    }}
                    className="w-full"
                />
            </div>
            <div className="px-1 py-4 bg-slate-100 flex flex-col gap-3 rounded-b-md">
                <div className="text-4xl font-bold">{item.properties.Title.title[0].text.content}</div>
                <div className="flex flex-row gap-1">
                    {item.properties.Tags.multi_select.map((data, i) => {
                        return (
                            <span className="px-2 bg-green-200 text-slate-500 rounded-md text-xs" key={i}>{data.name}</span>
                        )
                    })}
                </div>
                <div>{item.properties.Highlight.rich_text[0].text.content}</div>
                <Link href={`blogs/${item.id}`}>
                    <div className="px-4 py-1 border border-slate-400 rounded-md bg-slate-300 cursor-pointer w-32 text-center mt-3 mx-auto">Read More</div>
                </Link>
            </div>
        </div>
    ))
    return (
        <div className="flex flex-col gap-3 mx-auto mb-2">
            {display}
        </div>
    );
};

export default Contents;