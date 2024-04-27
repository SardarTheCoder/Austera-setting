import React, { useRef, useState } from 'react';
import { BsUpload } from "react-icons/bs";
import { LuFileScan } from "react-icons/lu";
const UpImg = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState(null); 

    function handleImageClick() {
        inputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        setImage(file); 
    }

    return (
        <div className="main">
            <div className="flex gap-24" onClick={handleImageClick}>
                
                {image && <img className='rounded-3xl shadow-xl' style={{height:'200px', width:'350px'}} src={URL.createObjectURL(image)} alt="Uploaded" />}
                
                <div  className='rounded-3xl border border-lime-600 shadow-xl ' style={{height:'200px', width:'450px'}}  >
                    <div className="mx-[40%] my-[5%] text-3xl"><BsUpload /></div>
                    <p className='text-zinc-600'>  <h3 className='text-lime-600 text-center'>Click to upload</h3>Lorem ipsum dolor sit amet, consectetur, adipisicing elit.</p>
                    <div className="mx-[80%] text-4xl text-[50px] text-lime-500"><LuFileScan /></div>
                 </div>
                
                <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
            </div>
        </div>
    );
}

export default UpImg;
