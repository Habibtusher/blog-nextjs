import Head from "next/head";
import Link from "next/link";
import React from "react";
import Blog from "../../components/blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="p-3">
        <div className="text-center ">
          <h3 className="text-2xl font-bold text-red-500">BLogs</h3>
          <Link className=" text-sm text-blue-300" href="/">
            Back to home
          </Link>
        </div>

        <div className=" mt-5 grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
          {blogs.map((ele) => (
            <Blog ele={ele}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );
  const blog = await res.json();

  return {
    props: {
      blogs: blog,
    },
  };
};
