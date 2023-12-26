"use client"
import Modal from "../modal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Hamburger from "@/assets/image/hamburger.svg";
import Reverse from "@/assets/image/reverseham.svg";
import Links from "../menu";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("?menu=y")
    };
    const searchParams = useSearchParams();
    const displayed = searchParams.get("menu");
    return (
        <>
            <div className="z-10 bg-slate-100/70 fixed top-0 right-0 border border-slate-700 p-1 m-1 cursor-pointer rounded-md" onClick={handleClick} title="Menu">
                {displayed === "y" ? 
                    <Image 
                        src={Reverse}
                        width={42}
                        height={42}
                        alt="Menu"
                    />
                : 
                    <Image 
                        src={Hamburger}
                        width={42}
                        height={42}
                        alt="Menu"
                    />
                }
            </div>
            <Modal className="bg-slate-50 pt-1 py-2 px-3 w-[80svw]" onClick={() => {}} onClose={() => {router.back()}} onOk={() => {}} title="Menu" urlParams="menu">
                <Links />
            </Modal>
        </>
    )
};

export default Navbar;