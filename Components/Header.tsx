'use client'
import Image from "next/image";
import Link from "next/link";
import {Bars3Icon} from "@heroicons/react/24/outline";
import {XCircleIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

interface Props {
    children?: React.ReactNode
}

export default function Header({children}: Props) {
    const [open, setOpen] = useState(false)
    const routes = [
        {title: "Home", path: "/"},
        {title: "Allgemeine Fragen", path: "/questions"},
        {title: "Bundesländer Fragen", path: "/states"},
        {title: "Übungstest", path: "/quiz"},
    ];
    return (<header className={"shadow-lg"}>
        <div className={`fixed lg:hidden transition-all z-20 duration-300 ${open ? 'right-0' : '-right-64'} p-4 bg-gray-900 h-screen w-64`}>
            <XCircleIcon onClick={() => setOpen(false)} className={"w-8 h-8 stroke-slate-50 mb-4"} stroke={"2"}/>
            <div className={" flex flex-col space-y-4"}>
                {routes.map((route) => (
                    <Link className={"px-6 py-2 text-slate-100 rounded bg-slate-700"} key={route.path} href={route.path}>{route.title}</Link>
                ))}
            </div>
        </div>
        <div className={"flex justify-between items-center px-6 py-4 bg-slate-900"}>
            <Image
                src={"/eb_logo.png"} alt={"Logo"}
                width={50}
                height={70}
            />
            <nav className={"space-x-8 hidden lg:flex"} onClick={() => setOpen(false)}>
                {routes.map((route) => (
                    <Link  className={"px-6 py-2 text-slate-100 rounded bg-slate-700"} key={route.path} href={route.path}>{route.title}</Link>
                ))}
            </nav>
            <Bars3Icon onClick={() => setOpen(!open)} className={"lg:hidden stroke-indigo-50 w-6 h-6"}/>
        </div>



    </header>)
}