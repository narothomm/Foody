import React,{useEffect,useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";

const AllFoods = () => {
  const [foods, setFoods]=useState(null)

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.get(`${BASE_URL}/api/all-foods/`)
      const data=res.data
      setFoods(data)
    }
    fetchData()
  },[])


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">All Foods</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
       foods ? foods.map((item, idx) => (
          <div key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">

            <img src={item.image} alt={item.title}
              className="w-full h-55 object-cover"/>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li><strong>Origin:</strong> {item.origin}</li>
                <li><strong>Category:</strong> {item.category}</li>
                <li><strong>Quantity:</strong> {item.quantity}</li>
                <li><strong>Price:</strong> ${item.price}</li>
                <li><strong>Rating:</strong> {item.rating} </li>
              </ul>

               <button className='btn btn-neutral mt-3 w-full'>Order now</button>
               
               {/* <button children='btn btn-neutral mt-3 w-full'>Order now</button> */}

              {/* <button
                disabled={item.quantity === 0}
                className={`w-full py-2 rounded-xl font-medium transition duration-200 
                  ${item.quantity === 0
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white'}`}>
                {item.quantity === 0 ? 'Out of Stock' : 'Order Now'}
              </button> */}

            </div>
          </div>
        )):Array.from({length:6},(_,index)=><div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>)
        }
      </div>
    </div>
  );
};

export default AllFoods;
