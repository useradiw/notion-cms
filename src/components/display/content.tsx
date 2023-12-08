interface pageProps {
    pageid: string,
}
const Content = async ({pageid}: pageProps) => {
    const req = await fetch(`http://localhost:3000/notion/pages/${pageid}`, {cache: "no-store"});
    const res = await req.json();
    // const data = res.body.results as blockdata[];
    // console.log(data.map((item) => item.paragraph)[2])
    console.log(res)
    return (
        <>
            <div>Content</div>
        </>
    )
};

export default Content;