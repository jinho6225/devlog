import Head from 'next/head'
import Link from 'next/link'

const name = 'Jinho6225'
export const siteTitle = 'Devlog'

export default function Layout({ children, home }: { children: React.ReactNode, home?: boolean }) {
    return (
    <div className="max-w-5xl py-4 px-4 mx-auto mt-12 mb-24 bg-gray-100">
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta
            name="description"
            content="Developer Blog using Next.js"
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
        <header className="flex flex-col items-center justify-center py-4">
            {home ? (
            <>
                <img
                src="/images/profile.jpg"
                className="rounded-full w-32"
                alt={name}
                />
                <h1 className="text-4xl font-bold mt-4">{name}</h1>
            </>
            ) : (
            <>
                <Link href="/">
                <a>
                    <img
                    src="/images/profile.jpg"
                    className="rounded-full w-16"
                    alt={name}
                    />
                </a>
                </Link>
            </>
            )}
        </header>
        <main className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">{children}</main>
    </div>
    )
}