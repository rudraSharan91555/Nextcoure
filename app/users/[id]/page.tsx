import React from 'react';
interface Props {
    params :{id:number}
}

const page = ({params:{id}}:Props) => {
  return (
    <div>
      useDetailHere {id}
    </div>
  )
}

export default page
