import axios from "axios"
import React, { useState, useEffect, useContext} from "react"
import { BASE_URL } from "../../../utils/Constants"
import { AuthContext } from '../../../provider/AuthProvider'
import toast from "react-hot-toast"



export const PopularFoods = () => {
  const [foods, setFoods]=useState([])

  const{user}=useContext(AuthContext)

  useEffect(()=>{
    const getpopularFoods=async()=>{
        const res=await axios.get(`${ BASE_URL}/api/popular-foods/`)
        setFoods(res.data)
       }
        getpopularFoods()
        
  },[] )

 //email base api func create
  const handleAddToCart=async(food_id)=>{
    try{
      const CardData={food_id:food_id,user_email:user.email,quantity:1}
      const res=await axios.post(`${BASE_URL}/api/add-to-cart/`,{...CardData})

      if(res.status==201){
        toast.success("food item added to cart successfully")
      }

    }catch(error){
      console.log(error)
      toast.error('something went wrong')
    }
  }

  return (
    <section className=' mx-auto py-12'>
      <h1 className='text-3xl font-bold  text-center mb-8'> PopularFoods  </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

          {/* alternative we use this code    This best practics */}
          {/* {  foods.length > 0 ? (    
             foods.map((item) => (
             <div key={item.id} className='bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:cursor-pointer'>
             <img src={item.image} alt='img' className='w-full h-48 rounded-xl' /> */}

        {
            foods.length>0 ?(                    
               foods.map((item)=>(
                    <div key={item.id} className='bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 hover:cursor-pointer overflow-hidden hover:-translate-y-1.5'>
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
                           
                           <button onClick={()=>handleAddToCart(item.id)} className="btn btn-neutral mt-3 w-full">Order now</button>
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


