import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
    return (
        <section className="px-4 ">
            <div className="mx-auto  flex flex-col-reverse mt-6 lg:mt-0
        lg:items-center gap-12 lg:grid lg:min-h-[calc(100vh-64px)]
        lg:grid-cols-2 lg:px-8">
                {/* content */}

                <div className="max-w-xl mx-auto text-center lg:text-left">

                    <span className="inline-flex rounded-full bg-surface px-4
                        py-2 text-sm font-medium text-muted-foreground">
                        🐾 Adopt love</span>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground mt-6">
                        Find Your Perfect Companion
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Discover loving pets looking for their forever homes
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Link href="/adopt" className="inline-flex items-center justify-center rounded-md 
            text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none 
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  
            disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary-hover h-10 px-4 py-2">
                            Adopt Now!
                        </Link>
                        <Link href="/about" className="inline-flex items-center border rounded-lg items-center justify-center rounded-md 
            text-sm font-medium border-border text-foreground transition hover:bg-surface px-4 py-2">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* hero image */}
                <div className="relative w-full max-w-md mx-auto lg:max-w-120 overflow-hidden self-start mt-2">
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image src="/images/hero.jpg" alt="Hero Image"
                            width={700} height={800} priority className="object-cover w-full h-auto lg:h-120" />
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-2xl
                    bg-white p-4 shadow-xl sm:bottom-6 sm:p-5">
                        <p className="text-sm font-medium text-foreground">
                            Home starts <strong>here</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
