import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function IndexPage() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className="flex justify-center">
        <p className="text-2xl font-medium mt-4">Devlog:
          <span className="text-xl mt-1">
            {'  '}Write, Record Anything that will be History
          </span>
        </p>
      </section>
    </Layout>
  )
}
