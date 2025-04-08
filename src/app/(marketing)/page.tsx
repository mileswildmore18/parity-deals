import {SignUpButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";
import {NeonIcon} from "@/app/(marketing)/_icons/Neon";
import {ClerkIcon} from "@/app/(marketing)/_icons/Clerk";
import {subscriptionTiersInOrder} from "@/data/subscriptionTiers";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {formatCompactNumber} from "@/lib/formatters";

export default function HomePage() {
    return (
        <>
            {/* Hero section*/}
            <section
                className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(0,0%,90%,40%))] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">Price Smarter, Sell
                    bigger!</h1>
                <p className="text-lg lg:text-3xl max-w-screen-xl">Optimize your product pricing across countries to
                    maximize sales.
                    Capture 85% of the untapped market with location-based dynamic pricing</p>

                {/* Signup button */}
                <SignUpButton>
                    <Button className="text-lg p-6 rounded-xl flex gap-2">Get started for free <ArrowRightIcon
                        className="size-5"/> </Button>
                </SignUpButton>
                {/*  End of signup button  */}

            </section>
            {/* End hero section*/}

            {/* Trusted by section*/}
            <section className="bg-primary text-primary-foreground">
                <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">


                    <h2 className="text-3xl text-center text-balance">Trusted by the top modern companies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
                        <Link href="https://neon.tech">
                            <NeonIcon/>
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon/>
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon/>
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon/>
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon/>
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon/>
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon/>
                        </Link>
                        <Link href="https://clerk.com">
                            <ClerkIcon/>
                        </Link>
                        <Link href="https://neon.tech">
                            <NeonIcon/>
                        </Link>
                        <Link className="md:max-xl:hidden" href="https://clerk.com">
                            <ClerkIcon/>
                        </Link>
                    </div>
                </div>
            </section>
            {/*End trusted by section*/}

            {/*Pricing section*/}
            <section id="pricing" className="px-8 py-16 bg-accent/5">
                <h2 className="text-4xl text-center text-balance font-semibold mb-8">
                    Pricing software which pays for itself 20x over
                </h2>
                <div className="grid grid-cols-2 lg:grid-col-4 gap-4 max-w-screen-xl mx-auto">
                    {subscriptionTiersInOrder.map(tier => (
                        <PricingCard key={tier.name} {...tier} />
                    ))}
                </div>
            </section>
            {/*End of pricing section*/}
        </>
    )
}

//  Cards for each subscription tier
function PricingCard({
                         name,
                         priceInCents,
                         maxNumberOfProducts,
                         maxNumberOfVisits,
                         canAccessAnalytics,
                         canCustomizeBanner,
                         canRemoveBranding
                     }: typeof subscriptionTiersInOrder[number]) {
    // Add cards for each subscription tier
    return <Card>
        <CardHeader>
            <div className="text-accent font-semibold mb-8">
                {name}
            </div>
            <CardTitle className="text-xl font-bold">${priceInCents / 100} /mo</CardTitle>
            <CardDescription>
                {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
            </CardDescription>

        </CardHeader>
    </Card>
}