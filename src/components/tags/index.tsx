interface Prop {
    text: string,
}

const Tags = ({text}: Prop) => {
    return (
        <>
            <span className="px-2 bg-green-200 text-slate-500 rounded-md text-sm">{text}</span>
        </>
    )
};

export default Tags;