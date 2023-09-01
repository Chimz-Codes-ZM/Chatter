import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "@/UserContext";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Loading from "../components/loading";
import Image from "next/image";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

interface PostInfo {
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

const EditPostModal = () => {
  const router = useRouter();

  const { _id } = router.query;

  const [post, setPost] = useState<PostInfo | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [newContent, setNewContent] = useState("");
  const [makeUpdate, setMakeUpdate] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:4000/posts/${_id}`)
      .then((response) => response.json())
      .then((postData) => {
        setPost(postData);
        setNewTitle(postData.title);
        setNewSummary(postData.summary);
        setNewContent(postData.content);
      })
      .catch((error) => {
        console.error("Error fetching post", error);
      });
  }, [_id]);

  const handleUpdatePost = () => {
    fetch(`http://localhost:4000/post/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        summary: newSummary,
        content: newContent,
      }),
    })
      .then((response) => response.json())
      .then((updatedPost) => {
        alert("Successfully updated post");
        setMakeUpdate(false)
        router.push(`/dashboard/post/${_id}`);       })
      .catch((error) => {
        alert("Error: " + error);
      });
  };

  return (
    <>
      <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg w-2/3">
          <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
          <ReactQuill value={newContent} onChange={setNewContent} />

          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            onClick={handleUpdatePost}
          >
            Update Post
          </button>
        </div>
      </div>
    </>
  );
};

const PostPage = () => {
  const router = useRouter();
  const [makeUpdate, setMakeUpdate] = useState(false);
  const [postInfo, setPostInfo] = useState<PostInfo | null>(null);
  const { _id } = router.query;

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${_id}`).then((response) => {
      response
        .json()
        .then((postInfo) => {
          setPostInfo(postInfo);
        })
        .catch((error) => {
          console.error("Error fetching post", error);
        });
    });
  }, [_id]);

  const {userInfo} = useContext(UserContext) || {};

  if (router.isFallback) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }




  const signedInUserName = userInfo?.email

  const userIsAuthor = (postInfo : PostInfo) => {
    return postInfo.author.username === signedInUserName
  }
  return (
    <Layout>
      <div className="prose max-w-4xl p-4 mx-auto relative">
         {makeUpdate && postInfo && userIsAuthor(postInfo) && (
                <div
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => {
            setMakeUpdate(!makeUpdate);
          }}
        >
          Edit Post
        </div>
         )}
  
        <div className="absolute">{makeUpdate && <EditPostModal />}</div>
        {postInfo && (
          <>
            <h1 className=" font-bold text-4xl pb-2">{postInfo.title}</h1>
            <p className="py-2 font-light ">{postInfo.summary}</p>
            <Image
              src={`http://localhost:4000/${postInfo.cover}`}
              alt="cover"
              width={500}
              height={300}
            />
            <h2>{postInfo.author.username}</h2>
            {parse(postInfo.content)}
          </>
        )}
      </div>
    </Layout>
  );
};

export default PostPage;
