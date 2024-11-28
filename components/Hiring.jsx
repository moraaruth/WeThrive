import Image from "next/image";
const Hiring = () => {
    return (
      <section className="bg-blue-700 py-20 my-10 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
            <Image
                 src=""
                 alt=""
                 width={120}
                 height={120}
                 sizes='50vw'
                 className="w-full h-auto rounded-t-xl mb-6 "
            />
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Do you have a job that's right for someone with autism? If you're hiring, the answer is yes!
            </h2>
            <p className="my-4 text-xl text-white">We can help</p>
            <form className="mt-3 max-w-2xl mx-auto md:mx-0 flex flex-col md:flex-row items-center">
              <button
                type="submit"
                className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Learn More
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hiring;
  