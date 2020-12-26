import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }: { postData: { title: string, date: string, contentHtml: string } }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h2>{postData.title}</h2>
            <div>
                <Date dateString={postData.date} />
            </div>
            <div className="my-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

export const getStaticProps: GetStaticProps = async context => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
  
export const getStaticPaths: GetStaticPaths = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}