import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

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

//

const Post: React.FC<PostProps> = ({
  _id,
  title,
  summary,
  content,
  createdAt,
  author,
  cover,
}) => {
  return (
    <div className="max-w-[750px] p-4 mx-auto">
      <Link href={`/post/${_id}`}>
        <div className="block mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500 mb-2">{summary}</p>
          <div className="flex items-center">
            <span className="text-gray-400">{author.username}</span>
            <span className="text-gray-400 mx-2">•</span>
            <time className="text-gray-400">
              {format(new Date(createdAt), "MMM d, yyyy")}
            </time>
          </div>
        </div>
      </Link>
      <Image src={cover} alt="cover" width={500} height={300} />
    </div>
  );
};

export default Post;
