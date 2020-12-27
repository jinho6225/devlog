import Head from 'next/head'
import Link from 'next/link'

const name = 'Jinho6225'
export const siteTitle = 'Devlog'

export default function Layout({ children, home }: { children: React.ReactNode, home?: boolean }) {

    const header = home ? (
            <Link href="/">
                <a className="text-6xl font-black text-black no-underline flex flex-col items-center justify-center">
                    <img
                    src="/images/profile.jpg"
                    className="rounded-full w-32"
                    alt={name}
                    />
                    <h1 className="text-4xl font-bold mt-4">{name}</h1>
                </a>
            </Link>
        ) : (
            <>
            </>
        );

    return (
        <div className="max-w-3xl py-8 px-4 mx-auto mt-12 mb-24 bg-yellow-50">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                name="description"
                content="Developer Blog using Next.js"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className="flex flex-col items-center justify-center">
                {header}
            </header>
            <main className="container mx-auto my-4 px-4">{children}</main>
            <footer className="flex flex-col items-center justify-center">
                    <span>© 2020, Built with{" "}<a href="https://nextjs.org/">Next.js</a> &#128293;</span>
            </footer>
        </div>
    )

    // return (
    //     <div className="max-w-screen-sm px-4 py-8 mx-auto">
    //         <header>{header}</header>
    //     </div>
    // );
}