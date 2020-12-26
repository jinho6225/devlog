import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export default function IndexPage({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className="flex justify-center">
        <p className="text-2xl font-medium mt-4">Write, Record Anything that will be History</p>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-medium m-4">{siteTitle}</h2>
        <ul className="m-4">
          {allPostsData.map(({ id, date, title }) => (
            <li className="m-4 text-lg" key={id}>
              <Link href={`/posts/${id}`}>
                <a href="#">{title}</a>
              </Link>
              <div>
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>      
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}