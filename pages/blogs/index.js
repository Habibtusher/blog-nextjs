import Head from "next/head";
import Link from "next/link";
import React from "react";

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
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div key={ele.id}>
                  <p> Id: {ele.id}</p>
                  <p>UserId: {ele.userId}</p>
                  <p>{ele.title}</p>
                  <Link
                    className="btn btn-active btn-link"
                    href={`/blogs/${ele.id}`}
                  >
                    Details
                  </Link>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
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
