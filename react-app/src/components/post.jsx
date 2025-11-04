import React from 'react'

const handleclick = (e)=>{
    e.preventDefault();
    console.log(e.target.getAttribute("btn-type"));
}

const Post = () => {
  return (
    <div className='w-40 h-40 bg-amber-100 border-2 rounded-xl p-4 gap-px' onClick={handleclick}>
      <p className='text-black'>This is post</p>
      <button className='h-10 bg-blue-400 m-1' btn-type="btn1"> Like</button>
      <button className=' bg-blue-400' btn-type="btn2"> Comment</button>
    </div>
  )
}

export default Post