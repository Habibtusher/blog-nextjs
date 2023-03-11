import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const blogid = ({blog}) => {
 
  const router = useRouter();
  const id = router.query.blogid;
  return (
    <div className="container mx-auto mt-5">
      <Head>
        <title>Detail</title>
      </Head>
      <h1 className="text-4xl">Dynamic page {id}</h1>
      <p className="text-xl mt-2">{blog.body}</p>
      <Link className="btn mt-4" href="/blogs">Back</Link>
    </div>
  );
};

export default blogid;


export const getStaticProps = async (context)=>{
    const {params} = context
    console.log("🚀 ~ file: [blogid].js:26 ~ getStaticProps ~ params:", params)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.blogid}`);
    const blog = await res.json()
    console.log("🚀 ~ file: [blogid].js:28 ~ getStaticProps ~ blog:", blog)
   
    return {
     props: {
         blog
     }
    }
 }

 export const getStaticPaths = async ()=>{
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const blogs = await res.json();
      console.log("🚀 ~ file: [blogid].js:41 ~ getStaticPaths ~ blogs:", blogs)

      const paths = blogs?.map(post =>{
        return {
            params:{
                blogid: `${post.id}`
            }
        }
      })
      return{
        paths,
        fallback:false
      }
 }