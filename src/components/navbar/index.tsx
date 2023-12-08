"use client"
import Modal from "../modal";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("?menu=y")
    };
    return (
        <>
            <div className="z-10 bg-slate-100/70 fixed top-0 right-0 border border-slate-7000 py-4 px-1 m-1 cursor-pointer rounded-md" onClick={handleClick}>Navbar</div>
            <Modal className="bg-slate-50" onClick={() => {}} onClose={() => {router.back()}} onOk={() => {}} title="Menu" urlParams="menu">
                <div>
                    Tes
                </div>
            </Modal>
        </>
    )
};

export default Navbar;