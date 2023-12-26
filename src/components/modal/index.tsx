"use client"

import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import Button from "@/components/button";
import Close from "@/assets/image/close.svg";

interface Props {
    children: React.ReactNode,
    onClick: () => void,
    onClose: () => void,
    onOk: () => void,
    title: string,
    className?: string | undefined;
    urlParams: string,
}

export default function Modal (props: Props) {
    const { children, onClick, onClose, onOk, title, className, urlParams } = props;
    const searchParams = useSearchParams();
    const dialogRef = useRef<null | HTMLDialogElement>(null);
    const showDialog = searchParams.get(urlParams)

    useEffect(() => {
        if (showDialog === "y") {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog]);

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    };

    const clickOk = () => {
        onOk()
        closeDialog()
    };

    const click = () => {
        onClick()
        closeDialog()
    };

    const dialog: JSX.Element | null = showDialog === "y" ? (
        <dialog ref={dialogRef} className="backdrop:bg-slate-500/30 rounded-xl min-w-fit min-h-fit">
            <div className={className}>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-between border-b border-slate-700 mb-2">
                        <div>
                            <h1 className="font-semibold text-lg">{title}</h1>
                        </div>
                        <div className="my-auto">
                            <Button icon={Close} width={20} height={20} onClick={closeDialog} />
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </dialog>
    ) : null;

    return dialog

};