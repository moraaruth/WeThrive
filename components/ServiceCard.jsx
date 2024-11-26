'use client'
import Image from "next/image";
import Link from "next/link";
import {FaMoneyBill, FaMapMarker} from "react-icons/fa"


const ServiceCard = ({service}) => {
    const getRateDisplay = () => {
        const { rates } = service;
        if (rates.monthly) {
            return `$${rates.monthly.toLocaleString()}/mo`

        } else if (rates.weekly){
            return `$${rates.weekly.toLocaleString()}/wk`
        }
    }
    return ( 
        <div className="rounded-xl shadow-md relative">
        <Image
          src={`/images/services/${service.images[1]}`}
          alt=""
          width={120}
          height={120}
          sizes='100vw'
          className="w-full h-auto rounded-t-xl"
        />
        <div className="p-4">
          <div className="text-left md:text-center lg:text-left mb-6">
            <div className="text-gray-600">{service.type}</div>
            <h3 className="text-xl font-bold">{service.name}</h3>
          </div>
          <h3
            className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
          >
            { getRateDisplay() }
          </h3>

                 <div
            className="flex justify-center gap-4 text-green-900 text-sm mb-4"
          >
            <p>
                <FaMoneyBill className="md:hidden lg:inline" /> Weekly
                </p>
            <p><FaMoneyBill className="md:hidden lg:inline" /> Monthly</p>
          </div>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="flex align-middle gap-2 mb-4 lg:mb-0">
             <FaMapMarker className="text-orange-700 mt-1"/>
              <span className="text-orange-700"> {service.location.constituency} {service.location.city} </span>
            </div>
            <Link
              href={`/services/${service._id}`}
              className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
        );
}
 
export default ServiceCard;