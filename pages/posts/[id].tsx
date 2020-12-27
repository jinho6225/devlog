import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({ postData }: { postData: { title: string, date: string, contentHtml: string } }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article className="mb-4">
            <div className="text-5xl font-bold mb-4">{postData.title}</div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link href='/'>
                    <a>
                        <img
                        src="/images/profile.jpg"
                        className="rounded-full w-10 mb-0 mr-4"
                        alt="mini_profile"
                        />
                    </a>
                  </Link>
                  <Date dateString={postData.date} />
                </div>
                <div className="">
                  <Link href='/'>
                    <span className="cursor-pointer flex items-center justify-between"><HiOutlineHome className="text-3xl"/></span>
                  </Link>
                </div>                
            </div>
        </article>
        <hr/>
        <article>
            <ReactMarkdown 
              children={postData.contentHtml} 
              renderers={{ code: CodeBlock }}  
            />
        </article>
      </Layout>
    )
  }

export const getStaticPaths: GetStaticPaths = async () => {
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