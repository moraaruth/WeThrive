'use client'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ blog, service }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
       src={`/images/services/${blog.images[1]}`}
        alt=""
        width={120}
        height={120}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{blog.type}</div>
          <h3 className="text-xl font-bold">{blog.name}</h3>
               </div>
        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <Link
            href={`/blogs/${blog._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
