import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="px-4 lg:px-8">
            <div className=" mx-auto flex flex-col-reverse  gap-12 py-8   lg:grid  lg:grid-cols-2 lg:items-center
                 lg:min-h-[85vh] lg:max-w-7xl"
            >
                {/* Content */}
                <div className="max-w-xl mx-auto text-center lg:text-left">
                    <span className=" inline-flex rounded-full bg-surface px-4
                    py-2 text-sm font-medium text-muted-foreground">
                        🐾 Adopt love
                    </span>

                    <h1 className="mt-6 text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                        Find Your Perfect Companion
                    </h1>

                    <p className="mt-4 text-lg text-muted-foreground">
                        Discover loving pets looking for their forever homes
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Link
                            href="/adopt"
                            className=" inline-flex items-center justify-center rounded-md bg-primary
                            px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover">
                            Adopt Now!
                        </Link>

                        <Link
                            href="/about"
                            className=" inline-flex items-center justify-center rounded-md border border-border
                            px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface" >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full max-w-md lg:max-w-xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl">
                        <Image src="/images/hero.jpg"  alt="Dog Hero Image"  width={700} height={800}priority 
                        className="w-full h-auto lg:h-[550px] object-cover"/>
                    </div>

                    <div
                        className=" absolute bottom-4 right-4  rounded-2xl bg-white p-4 shadow-xl
                        sm:bottom-6 sm:right-6" >
                        <p className="text-sm font-medium text-foreground">
                            Home starts <strong>here</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}