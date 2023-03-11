import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Blog from "./comments/blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home({blogs}) {
  return (
    <>
      <Head>
        <title>My Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header/>
        <Banner/>
        <div className="p-4 text-center">
             <div className=" mt-5 grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {blogs.map((ele) => (
            <Blog ele={ele}/>
          ))}
          </div>
          <Link className="btn btn-primary  mt-5" href="/blogs">See More</Link>
        </div>
     
        <Footer/>
        {/* <h1 className="text-3xl">Habibur Rahman</h1>
        <Link className=" text-sm text-blue-300" href="/blogs">View Blogs</Link> */}
        
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=4"
  );
  const blog = await res.json();

  return {
    props: {
      blogs: blog,
    },
  };
};