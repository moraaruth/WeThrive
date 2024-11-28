import services from '@/services.json'
import BlogCard from './BlogCard'
import ServiceCard from './ServiceCard'
import blogs from '@/blogs.json'
import SpectrumCard from './SpectrumCard'
import spectrums from '@/spectrums.json'
import Link from 'next/link'

const HomeServices = () => {
  const recentServices = services.slice(0, 3)
  const recentSpectrums = spectrums.slice(0, 3)
  const recentBlogs = blogs.slice(0, 3)

  return (
    <>
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
        Living on the Spectrum: Stories and Insights
        </h2>
        {recentSpectrums.length === 0 ? (
          <p>No spectrum found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spectrums.map((spectrum) => (
              <SpectrumCard key={spectrum._id} spectrum={spectrum} />
            ))}
          </div>
        )}
      </div>
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Find autism services in your community
        </h2>
        {recentServices.length === 0 ? (
          <p>No service found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>

      <div className="container-xl lg:container m-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Autism Information and support{' '}
        </h2>
        {recentBlogs.length === 0 ? (
          <p>No service found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>

      
      
    </section>
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link href='/services' 
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 ">
        View all services
      </Link>

    </section>
    </>
  )
}

export default HomeServices
