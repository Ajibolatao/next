import { getSession, useSession } from 'next-auth/react'
import React from 'react'


export default function Blog({post}) {


  console.log(post)
  const {data: session, status} = useSession()
  return (
    <div>blog</div>
  )
}


export async function getServerSideProps(context) { 
  const  session = await getSession(context);

  if (!session) {
    return {
      redirect : {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false
      }
    }
  }

  return {
    props: {post: 'This is the blog'}
  } 
}