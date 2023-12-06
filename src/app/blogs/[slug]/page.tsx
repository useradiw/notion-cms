import Content from "@/components/display/content";

const blogPost = ({params}: {params: {slug: string}}) => {
    const pageid = params.slug;
    return (
        <>
            <Content pageid={pageid}/>
        </>
    )
};

export default blogPost;