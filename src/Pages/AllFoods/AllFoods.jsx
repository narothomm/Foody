import React,{useContext, useEffect,useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";
import { CartContext } from "../../provider/CartProvider";
const page_size=6

const AllFoods = () => {
  const [foods, setFoods]=useState(null)
  const [page,setPage]=useState(1)
  const [numOfPage,setNumOfPage]=useState(1)

  const {addToCart}=useContext(CartContext)

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.get(`${BASE_URL}/api/all-foods/`,{params:{page:page,page_size:page_size}})
      const data=res.data.result
      setFoods(data)
      setPage(res.data.current_page)
      setNumOfPage(res.data.num_of_pages)
    }
    fetchData()
  },[page])

  const goToPrevious=()=>{
    if(page>1){
      setPage(prev=>Number(prev)-1)
    }
  }

  const goToNext=()=>{
    if(page<numOfPage){
      setPage(prev=>Number(prev)+1)
    }
  }



  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">All Foods</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
      //  foods ? foods.map((item, idx) => (
      //     <div key={idx}

       foods? foods.map((item) => (
           <div key={item.id} 
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

               <button onClick={()=>addToCart(item.id)} className='btn btn-neutral mt-3 w-full'>Order now</button>
               
              
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
        )):Array.from({length:6},(_,index)=> (
             <div key={index} className="flex w-52 flex-col gap-4">
          
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>))
        }
      </div>

      <div className="flex justify-center items-center gap-5 w-full mb-5">
        <button onClick={goToPrevious}
        disabled={page===1}
        className="hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed">Prev
        </button>

        <span className="text-gray-700"> Page{page} of {numOfPage} </span>

        <button onClick={goToNext}
        disabled={page===numOfPage}
        className="hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed">Next
        </button>

      </div>
    </div>
  );
};

export default AllFoods;
