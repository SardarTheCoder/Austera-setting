import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TextEd = () => {
    const [value, setValue] = useState('');
  return (
    <>
    <div className="">
        <div className=" w-[600px] gap-10"><ReactQuill theme="snow" value={value} onChange={()=>setValue(e.target.value)} /></div>
        <div className="mt-48">{value}</div>
    </div>

    </>
  )
}

export default TextEd