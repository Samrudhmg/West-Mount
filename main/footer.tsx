import Link from "next/link";
// import Link from "next/link";

export default function Footer() {
    const courses = [
        {
            name: "ACCA in Ireland",
            url: "/",
        },
        {
            name: "MBBS in Armenia",
            url: "/",
        },
        {
            name: "ACCA in UK",
            url: "/",
        },
        {
            name: "Engineering in Ireland",
            url: "/",
        },
        {
            name: "Pharma in Ireland",
            url: "/",
        },
    ];

    const branches = [
        { name: "Kochi", url: "/" },
        {
            name: "Trivandrum",
            url: "/",
        },
        { name: "Calicut", url: "/" },
    ];

    const socialLinks = [
        {
            name: "@west_mount_studyabroad",
            followers: "220K followers",
            url: "https://www.instagram.com/west_mount_studyabroad",
            icon: "/icons/social1.svg",
            title: "Instagram",
        },
        {
            name: "West Mount Study Abroad",
            followers: "22.5K followers",
            url: "https://www.youtube.com/@westmountstudyabroad",
            icon: "/icons/social2.svg",
            title: "YouTube",
        },
        {
            name: "@Westmount.Studyabroad",
            followers: "5.6K followers",
            url: "https://www.facebook.com/Westmount.Studyabroad/",
            icon: "/icons/social3.svg",
            title: "Facebook",
        },
    ];

    const legalLinks = [
        {
            name: "Privacy policy",
            url: "/",
        },
        {
            name: "Terms & Conditions",
            url: "/",
        },
        { name: "Disclaimer", url: "/" },
        {
            name: "Refund policy",
            url: "/",
        },
        { name: "Cancellation", url: "/" },
    ];

    return (
        <footer
            className=" bg-[#1D1D1D] px-4 py-8 text-white md:px-6 lg:px-8"
            aria-label="Website footer"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[auto_150px_auto_auto]">
                    {/* Courses Section */}
                    <section>
                        <h3 className="mb-4 text-lg font-medium">Courses</h3>
                        <nav aria-label="Course navigation">
                            <ul className="space-y-2">
                                {courses.map((course) => (
                                    <li key={course.name}>
                                        <Link
                                            href={course.url}
                                            className="!text-gray-400 hover:text-gray-300"
                                        >
                                            {course.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Branches Section */}
                    <section>
                        <h3 className="mb-4 text-lg font-medium">Branches</h3>
                        <div
                            aria-label="Branch locations"
                            className="text-white"
                        >
                            <ul className="space-y-2">
                                {branches.map((branch) => (
                                    <li key={branch.name}>
                                        <Link
                                            href={branch.url}
                                            className="!text-gray-400 hover:text-gray-300"
                                        >
                                            {branch.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section>
                        <h3 className="mb-4 text-lg font-medium">Contact us</h3>
                        <address className="not-italic">
                            <div className="space-y-3">
                                <Link
                                    href="tel:+919072123477"
                                    className="flex items-center !text-white hover:text-gray-300"
                                >
                                    <img
                                        src="/icons/call-fill.svg"
                                        alt="call"
                                        className="mr-2 size-5"
                                    />
                                    +91 9072 1234 77
                                </Link>
                                <Link
                                    href="mailto:westmountoverseas@gmail.com"
                                    className="flex items-center !text-white hover:text-gray-300"
                                >
                                    <img
                                        src="/icons/mail.svg"
                                        alt="mail"
                                        className="mr-2 size-5"
                                    />
                                    westmountoverseas@gmail.com
                                </Link>
                            </div>
                        </address>
                    </section>

                    {/* Follow Us Section */}
                    <section>
                        <h3 className="text-md mb-4 font-medium">Follow us</h3>
                        <nav aria-label="Social media links">
                            <div className="space-y-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.icon}
                                        href={social.url}
                                        className="flex items-center !text-white hover:text-gray-300"
                                    >
                                        <img
                                            src={
                                                social.icon ||
                                                "/placeholder.svg"
                                            }
                                            alt={social.title}
                                            className="mr-2 size-5"
                                        />
                                        <div>
                                            <div className="flex items-center gap-3">
                                                {social.name}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {social.followers}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </section>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <div className="text-sm font-semibold text-white">
                            Copyright ©{new Date().getFullYear()}
                            {"  "}
                            <Link
                                href="https://westmount.co.in/"
                                className="!text-white hover:text-gray-300"
                            >
                                Westmount Study Abroad
                            </Link>
                        </div>
                        <nav aria-label="Legal links">
                            <ul className="flex flex-wrap justify-center gap-4 text-sm">
                                {legalLinks.map((link, index) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.url}
                                            className="!text-white hover:text-gray-300"
                                        >
                                            {link.name}
                                        </Link>
                                        {index < legalLinks.length - 1 && (
                                            <span
                                                className="mx-2 text-gray-600"
                                                aria-hidden="true"
                                            >
                                                ·
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
