import Link from "next/link";
import {BrandLogo} from "@/components/BrandLogo";
import {UserButton} from "@clerk/nextjs";

// Add Nav Bar for Dashboard
export function NavBar() {
    return (
        <header className="flex py-4 shadow bg-background">
        <nav className="flex items-center gap-10 container">
            <Link className="mr-auto" href="/dashboard">
                <BrandLogo />
            </Link>
            <Link href="/dashboard/products">Products</Link>
            <Link href="/dashboard/analytics">Analytics</Link>
            <Link href="/dashboard/subscription">Subcription</Link>
            <UserButton />
        </nav>
    </header>
    // End of nav bar
    )
}