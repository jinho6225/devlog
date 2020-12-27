import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function IndexPage({ allPostsData }: { allPostsData: 
  {date: string, title: string, id: string}[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className="flex flex-col justify-center">
        <p className="text-2xl font-medium mt-4">Write anything that will be your personal history</p>
        <p className="text-xl mt-4">One of the great benefits in writing your personal history is that it gives you a chance to tell yourself what you have accomplished and learned. You almost have the chance to relive your life all over again.</p>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-medium">{siteTitle}</h2>
        <ul className="m-4">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-lg" key={id}>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
