import ServiceCard from '@/components/ServiceCard'
import connectDB from '@/config/database'
import Service from '@/models/Service'

const Services = async () => {
  await connectDB();
  const services = await Service.find({});
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {services.length === 0 ? (
          <p>No service found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard  key={service._id} service={service}/>
            ))}
          </div>
        )}
      </div>

      
    </section>
  )
}

export default Services
