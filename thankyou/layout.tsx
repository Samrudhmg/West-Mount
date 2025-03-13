import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | West-Mount",
};

interface LayoutProps {
    children: React.ReactNode;
}

export default function ThankyouLayout({ children }: Readonly<LayoutProps>) {
    return <>{children}</>;
}
