import axios from "axios"
import React, { useState, useEffect} from "react"
import { BASE_URL } from "../../../utils/Constants"



const PopularFoods = () => {
  const [foods, setFoods]=useState([])

  useEffect(()=>{
    const getpopularFoods=async()=>{
        const res=await axios.get(`${ BASE_URL}/api/popular-foods/`)
        setFoods(res.data)
       }
        getpopularFoods()
        
  },[] )

  return (
    <section className='max-w-6xl mx-auto py-12'>
      <h1 className='text-3xl font-bold  text-center mb-8'> PopularFoods  </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

           {/* foods.length > 0 ? (    alternative we use this code 
             foods.map((item) => (
             <div key={item.id} className='bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:cursor-pointer'>
             <img src={item.image} alt='img' className='w-full h-48 rounded-xl' /> */}

        {
            foods.length>0 ?(                    
               foods.map((item,idx)=>(
                    <div key={idx} className='bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:cursor-pointer overflow-hidden hover:-translate-y-1.5'>
                    <img src={item.image} alt='img' className='w-full h-48 rounded-xl hover:scale-110 transition-all duration-300'/>  

                        <div className='p-5'>
                            <h2 className='text-xl font-bold'> {item.title} </h2>
                            <p className="text-gray-600 text-sm mb-2"> {item.description} </p>

                            <div className="flex justify-between items-center mt-3">
                               <p className="text-gray-600 text-sm "> 🎯 {item.category} </p>
                               <p className="text-gray-600 text-sm "> ❤️{item.origin} </p>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                               <p className="text-gray-600 text-sm "> ⭐{item.rating} </p>
                               <p className="text-gray-600 text-sm "> 💲{item.price} </p>
                            </div>
                           
                           
                        </div>

                    </div>
                ))
            )
             :Array.from({length:6},(_,index)=>  
                <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
          )
        }
      </div>


    </section>
  )
}
export default PopularFoods


