"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import { ApplyDialogForm } from "./apply-dialog-form";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Tetimonials", href: "/testimonials" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get the current route

    // Function to handle smooth scrolling
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full  bg-white text-black">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:justify-around">
                {/* Logo */}
                <button
                    onClick={() => handleScroll("hero")}
                    className="flex items-center space-x-2"
                >
                    <Image
                        src="/images/West-Mount-Logo.png"
                        alt="West Mount Logo"
                        className="h-14 object-contain lg:h-12"
                        width={130}
                        height={130}
                    />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 p-4 bg-white">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-gray-700 hover:text-gray-900 focus:text-[#005B5B] ${
                                pathname === link.href ? "text-[#006969]" : ""
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Get Started Button (Desktop) */}
                <div className="hidden md:block">
                    <ApplyDialogForm>
                        <Button variant="default" className="rounded-md py-5">
                            Get Started
                        </Button>
                    </ApplyDialogForm>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 md:hidden"
                >
                    <Menu className="size-7" />
                    <span className="sr-only">Toggle menu</span>
                </button>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className=" animate-slide-in absolute inset-x-0 top-16 border-b bg-white md:hidden">
                        <nav className="grid grid-col space-y-5 text-center justify-center p-4 bg-white shadow-md">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)} // Close menu when clicked
                                    className={`text-gray-700 hover:text-gray-900 focus:text-blue-600 ${
                                        pathname === link.href
                                            ? "text-blue-600"
                                            : ""
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
