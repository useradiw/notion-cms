import Link from "next/link";
import Image from "next/image";

interface Props {
    text?: string,
    href?: string,
    onClick?: () => void,
    className?: string,
    icon?: string,
    width?: number,
    height?: number,
};

const Button: React.FC<Props> = (props) => {
    const { text, href, onClick, className, icon, width, height } = props;
    return (
        <>
            <>
                {href ? 
                    <Link href={href}>
                        <button onClick={onClick} className={className}>
                            {text}
                            { icon ? <Image src={icon as string} alt="Icon" width={width} height={height}/> : null}
                        </button>
                    </Link>
                :
                    <button onClick={onClick} className={className}>
                        {text}
                        { icon ? <Image src={icon as string} alt="Icon" width={width} height={height}/> : null}
                    </button>
                }
            </>
        </>
    )
};

export default Button;