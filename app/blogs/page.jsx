import BlogCard from '@/components/BlogCard'
import blogs from '@/blogs.json'
const Blogs = () => {
    return ( 

        <div className="container-xl lg:container m-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Autism Information and support{' '}
        </h2>
        {blogs.length === 0 ? (
          <p>No service found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
     );
}
 
export default Blogs;