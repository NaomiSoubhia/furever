"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

/*Array of navigation items*/
const navItems = [
    { label: "Home", href: "/" },
    { label: "Adopt", href: "/adopt" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }

];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen,setIsOpen] = useState(false);
    const route = useRouter();
    return (
        <header className="border-b border-border bg-background">
            <nav className="mx-auto flex h-16 max-w-7xl items-center 
            justify-between px-4 sm:px-6 lg:px-8">
                {/* logo */}
                <Link href="/" className="text-3xl font-bold tracking-tight 
                text-foreground">
                    FurEver
                </Link>
                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link className={`relative text-sm font-medium 
                            uppercase transition-colors 
                            ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                href={item.href} key={item.label}>{item.label}
                            </Link>
                        )

                    })}
                </div>

                {/* Desktop Buttons */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface" onClick={() => route.push("/search")}>
                            <IoSearch size={22} />
                        </button>
                        {/* User Icon */}
                        <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface" onClick={() => route.push("/signin")}>
                            <FaRegUser size={22} />
                        </button>
                        {/* Heart Icon */}
                        <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface" onClick={() => route.push("/favorites")}>
                            <FaRegHeart size={22} />
                        </button>
                    </div>

                 {/* Mobile menu button */}
                 
                <button className="text-2xl text-foreground md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                </div>


            </nav>

            {isOpen && (
                <div className="border-t border-border bg-background md:hidden">
                    <div className="flex flex-col px-4 py-4">
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.href}
                            className="rounded-md px-2 py-3 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground" 
                            onClick={() => setIsOpen(false)}>
                                {item.label}
                            </Link>
                        ))}

                        <button className="mt-4 rounded-lg bg-primary py-3 texr-sm font-medium text-primary-foreground transition hover:bg-primary-hover" onClick={() => route.push("/signin")}>
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}