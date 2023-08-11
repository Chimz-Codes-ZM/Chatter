import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import Loading from '../components/loading';
import Image from 'next/image';
import parse from 'html-react-parser';


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


const PostPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return
    
    <Layout><Loading /></Layout>;
  }

  const [postInfo, setPostInfo] = useState<PostInfo | null>(null);
  const {_id} = router.query


  useEffect(() => {
    fetch(`http://localhost:4000/posts/${_id}`)
    .then(response =>{
        response.json().then(postInfo => {
            setPostInfo(postInfo)
        })
        .catch(error => {
          console.error('Error fetching post', error);
        });
    })
  },[_id])
  return (
    <Layout>
      <div className='prose max-w-[750px] p-4 mx-auto'>
        {postInfo && (
          <>
       <h1>{postInfo.title}</h1>
                        <p>{postInfo.summary}</p>
            <Image src={`http://localhost:4000/${postInfo.cover}`} alt='cover' width={500} height={300} />
            <h2>{postInfo.author.username}</h2>
            {parse(postInfo.content)}
          </>
        )}
      </div>
    </Layout>
  );
};


export default PostPage;