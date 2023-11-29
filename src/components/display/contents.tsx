const getData = async () => {
    const req = await fetch("http://localhost:3000/notion/", {cache: "no-store"});
    const res = await req.json();
    return res;
};

const Contents = async () => {
    const values = await getData();
    const data: fetchData[] = values.body;
    const properties = data.map((item) => item.properties as properties);
    const display = properties.map((item, i ) => (
        <div key={i}>
            <div className="text-xl font-bold">{item.Title.title[0].text.content}</div>
            <div className="flex flex-row gap-1">
                {item.Tags.multi_select.map((data, i) => {
                    return (
                        <span className="px-1 bg-green-300 text-slate-500 rounded-md" key={i}>{data.name}</span>
                    )
                })}
            </div>
            <div>{item.Highlight.rich_text[0].text.content}</div>
            <div className="font-medium text-lg border-t border-slate-500 mt-4">{item.Article.rich_text[0].text.content}</div>
        </div>
    ))
    return (
        <div className="flex flex-col gap-2 w-[50%] mx-auto p-1">
            {display}
        </div>
    );
};

export default Contents;