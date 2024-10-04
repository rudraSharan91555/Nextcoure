import React from 'react'
interface Props{
    params :{slug: string[]}
    searchParams:{sortOrder:string[]}
}

const Productpage = ({params:{slug} , searchParams:{sortOrder} }:Props) => {
  return (
    <div>
      Productpage {slug} {sortOrder}
    </div>
  )
}



export default Productpage
