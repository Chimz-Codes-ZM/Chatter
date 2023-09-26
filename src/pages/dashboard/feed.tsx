import React, { useEffect, useState } from "react";
import Layout from "./components/layout";
import Link from "next/link";

interface PostProps {
  title: string;
  summary: string;
  createdAt: string;
  content: string;
  author: {
    username: string;
  };
  cover: string;
  _id: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    fetch("https://chatter-backend-seven.vercel.app/posts").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <Layout activePage="feed">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 &&
          posts.map((post) => (
            <Link key={post._id} href={`/dashboard/post/${post._id}`}>
              <div className="border rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <img
                  src={`https://chatter-backend-seven.vercel.app/${post.cover}`}
                  alt="cover"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.summary}</p>
                  <p className="mt-2 text-sm text-gray-500">
                    {post.author.username} - {post.createdAt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default Feed;
