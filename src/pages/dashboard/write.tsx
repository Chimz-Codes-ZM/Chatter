import React, { useState, FormEvent } from 'react'
import { useRouter } from 'next/router';
import Layout from './components/layout'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const  modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
] 

const write = () => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files;
    if (selectedFile && selectedFile.length > 0) {
      setFile(selectedFile);
    }
  };

  
const createNewPost = async  (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const data = new FormData();
data.set('title', title);
data.set('summary', summary);
data.set('content', content);
if (file && file.length > 0) {
  data.set('file', file[0]);
}
const response = await fetch('http://localhost:4000/post', {
   method: 'POST',
   body: data,
   credentials: 'include'
})

if (response.ok) {
router.push('/dashboard')
}

// console.log(file)
}

  return (
    <Layout activePage='write'>
        <form className='flex flex-col gap-1 px-10 p-4 max-w-4xl' onSubmit={createNewPost}>
            <input type='text' placeholder='Title' className='border' value={title} onChange={e => setTitle(e.target.value)}/>
            <input type='text' placeholder='Summary' className='border' value={summary} onChange={e => setSummary(e.target.value)}/>
            <input type='file' onChange={handleFileChange}/>
<ReactQuill value={content} modules={modules} formats={formats} onChange={newValue => setContent(newValue)}/>
                        <button className='bg-gray-700 text-gray-50 rounded p-2'>Create Post</button>
        </form>
    </Layout>
  )
}

export default write