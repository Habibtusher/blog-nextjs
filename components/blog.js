import Link from 'next/link';
import React from 'react';

const Blog = ({ele}) => {
    return (
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
    );
};

export default Blog;