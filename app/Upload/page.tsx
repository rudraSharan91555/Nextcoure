'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface cloudinaryResult{
    public_id :string
}

const UploadPage = () => {
    const [publicID,setPublicId] = useState('')
  return (
    <>
    {publicID && 
    <CldImage src={publicID} width={270} height={180} alt='Image is here' />}
    <CldUploadWidget 
    uploadPreset='hry9h8yx'
    onUploadAdded={(result,widget)=>{
        if (result.event !== 'success') return;
        const info = result.info as cloudinaryResult
        setPublicId(info.public_id)
    }}
    >
        {({open})=> 
        <button className=
        'btn btn-primary'
        onClick={()=>open()}>upload</button> }
        
    </CldUploadWidget>
    </>
  )
}

export default UploadPage