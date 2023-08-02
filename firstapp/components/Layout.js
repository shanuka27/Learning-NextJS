import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
        <header>
            <nav>
            <Link href="/">
                Home
            </Link>{" "}
            |
            <Link href="/learn">
                Learn
            </Link>{" "}
            |
            <Link href="/contacts">
                 Contacts
            </Link>
            </nav>
        </header>
        </>
    );
}
