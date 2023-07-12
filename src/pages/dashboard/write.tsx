import React from 'react'
import Layout from './components/layout'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const write = () => {
  return (
    <Layout activePage='write'>
        <form className='flex flex-col gap-1 px-10 p-4 max-w-4xl'>
            <input type='text' placeholder='Title' className='border'/>
            <input type='text' placeholder='Summary' className='border'/>
            <input type='file' />
<ReactQuill />
                        <button className='bg-gray-700 text-gray-50 rounded p-2'>Create Post</button>
        </form>
    </Layout>
  )
}

export default write