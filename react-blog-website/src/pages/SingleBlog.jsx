import React from 'react'
import { useLoaderData } from 'react-router-dom'

import { FaClock, FaUser } from 'react-icons/fa6'
import SideBar from '../assets/components/SideBar';

const SingleBlog = () => {
  const data=useLoaderData();
  const {title, image, category, author, published_date, reading_time, content} = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4 ">
        <h1 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h1>
      </div>
      <div className=' max-w-7xl mx-auto my-12 flex px-5 md:px-28 flex-col md:flex-row gap-12'>
        <div className=' lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='
            w-full mx-auto rounded' />
          </div>
          <h2 className="text-3xl font-bold text-blue-500 cursor-pointer mt-8">{title}</h2>
          <p className=" mb-3 text-gray-600 "> <FaUser className='inline-flex items-center mr-2 ' /> {author} | {published_date}</p>
          <p className=" mb-3 text-gray-600 "> <FaClock className='inline-flex items-center mr-2 ' /> {reading_time}</p>
          <p className=" text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci dignissimos perspiciatis. Quaerat reiciendis ducimus vitae quas possimus. Impedit corrupti consequatur maiores repellat explicabo iusto dolor officia expedita reprehenderit quam! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius similique, id eveniet dolor ipsum? Deleniti dolore laudantium a perspiciatis laborum nemo aliquam architecto ut porro ipsa quas, similique aut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo ex in perferendis aliquid eius placeat voluptas molestiae qui excepturi repudiandae facilis, sapiente nemo repellendus nobis, sequi non quidem voluptatum.</p><br></br>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci dignissimos perspiciatis. Quaerat reiciendis ducimus vitae quas possimus. Impedit corrupti consequatur maiores repellat explicabo iusto dolor officia expedita reprehenderit quam! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius similique, id eveniet dolor ipsum? Deleniti dolore laudantium a perspiciatis laborum nemo aliquam architecto ut porro ipsa quas, similique aut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo ex in perferendis aliquid eius placeat voluptas molestiae qui excepturi repudiandae facilis, sapiente nemo repellendus nobis, sequi non quidem voluptatum.</p><br></br><br></br>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci dignissimos perspiciatis. Quaerat reiciendis ducimus vitae quas possimus. Impedit corrupti consequatur maiores repellat explicabo iusto dolor officia expedita reprehenderit quam! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius similique, id eveniet dolor ipsum? Deleniti dolore laudantium a perspiciatis laborum nemo aliquam architecto ut porro ipsa quas, similique aut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo ex in perferendis aliquid eius placeat voluptas molestiae qui excepturi repudiandae facilis, sapiente nemo repellendus nobis, sequi non quidem voluptatum.</p><br></br>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci dignissimos perspiciatis. Quaerat reiciendis ducimus vitae quas possimus. Impedit corrupti consequatur maiores repellat explicabo iusto dolor officia expedita reprehenderit quam! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius similique, id eveniet dolor ipsum? Deleniti dolore laudantium a perspiciatis laborum nemo aliquam architecto ut porro ipsa quas, similique aut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo ex in perferendis aliquid eius placeat voluptas molestiae qui excepturi repudiandae facilis, sapiente nemo repellendus nobis, sequi non quidem voluptatum.</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci dignissimos perspiciatis. Quaerat reiciendis ducimus vitae quas possimus. Impedit corrupti consequatur maiores repellat explicabo iusto dolor officia expedita reprehenderit quam! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius similique, id eveniet dolor ipsum? Deleniti dolore laudantium a perspiciatis laborum nemo aliquam architecto ut porro ipsa quas, similique aut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo ex in perferendis aliquid eius placeat voluptas molestiae qui excepturi repudiandae facilis, sapiente nemo repellendus nobis, sequi non quidem voluptatum.</p><br></br>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus adipisci dignissimos perspiciatis. Quaerat reiciendis ducimus vitae quas possimus. Impedit corrupti consequatur maiores repellat explicabo iusto dolor officia expedita reprehenderit quam! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius similique, id eveniet dolor ipsum? Deleniti dolore laudantium a perspiciatis laborum nemo aliquam architecto ut porro ipsa quas, similique aut.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quo ex in perferendis aliquid eius placeat voluptas molestiae qui excepturi repudiandae facilis, sapiente nemo repellendus nobis, sequi non quidem voluptatum.</p>
            
          </div>
        </div>
        <div className="lg:w-1/4 my-auto mt-0">
          <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
