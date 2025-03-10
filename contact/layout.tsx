export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            {/* <footer className="p-4 bg-gray-800 text-white">About Page Footer</footer> */}
        </div>
    );
}
