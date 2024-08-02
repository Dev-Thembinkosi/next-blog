import React from 'react'
import { sortBlogs } from '@/src/utils';

export const FeaturePosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);


  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize text-4xl'>
            Featured posts
        </h2>
    </section>
  )
}
