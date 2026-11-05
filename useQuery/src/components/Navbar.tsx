import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li className=""><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/users">Users</Link></li>
            </ul>
        </nav>
    );
}