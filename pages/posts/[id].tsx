import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

export default function Post({ postData }: { postData: { title: string, date: string, contentHtml: string } }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <div className="text-3xl font-bold">{postData.title}</div>
            <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <a>
                      <img
                      src="/images/profile.jpg"
                      className="rounded-full w-8 my-4 mr-4"
                      alt="mini_profile"
                      />
                  </a>
                  <Date dateString={postData.date} />
                </div>
                <div>
                  <Link href='/'>
                    <span className="cursor-pointer"><HiOutlineHome className="text-2xl" /></span>
                  </Link>
                </div>                
            </div>
            <div className="my-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

export const getStaticPaths: GetStaticPaths = async context => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
  
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
      props: {
        postData
      }
    }
  }