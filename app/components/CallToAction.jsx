import Image from "next/image";
import Link from "next/link";
import { Card, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
    return (
        <section id="ContactUs" className="container mx-auto py-10">
            <Card className="w-full bg-[#F6F6F6] shadow-lg rounded-2xl">
                <Card.Content className="flex flex-col md:flex-row items-center justify-between gap-10 p-4">
                    <div className="space-y-4 max-w-lg text-center">
                        <Image
                            src='/blueprint_logo.png'
                            alt='Blueprint Logo'
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                        <h2 className="font-heading text-2xl md:text-3xl font-semibold">
                            Ready to Dive Deeper?
                        </h2>

                        <p className="text-foreground text-lg">
                            Are you ready to take your business to the next level with your own website?
                        </p>

                        <Link
                            href="https://bivensblueprintllc.hbportal.co/public/68c4169c4d8580002134164b"
                            className="inline-flex items-center gap-3 button button--primary rounded-xl px-8 py-6 text-lg font-medium shadow-md hover:shadow-xl transition-all"
                        >
                            Let&apos;s Get Started
                            <ArrowRight className="size-5" />
                        </Link>
                    </div>

                    {/* Right Image */}
                    <Link
                        href="https://www.blueprintwebdev.com"
                        className="transition-all rounded-xl hover:ring-1 hover:ring-accent hover:scale-[1.02]"
                    >
                        <Image
                            src="/Macbook_Mockup.webp"
                            alt="Macbook mockup"
                            width={450}
                            height={450}
                            className="rounded-xl"
                        />
                    </Link>
                </Card.Content>
            </Card>
        </section>
    );
}

export default CallToAction;