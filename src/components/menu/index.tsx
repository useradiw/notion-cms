import Button from "../button";

const Links = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <ul>
                    <li>
                        <Button text="Home" href="/" className="font-medium text-lg"/>
                    </li>
                    <li>
                        <Button text="About" href="/" className="font-medium text-lg"/>
                    </li>
                    <li>
                        <Button text="Feedback" href="/" className="font-medium text-lg"/>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Links;