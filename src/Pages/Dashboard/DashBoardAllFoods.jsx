import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/Constants'
import TableSkeleten from '../../components/common/TableSkeleten'
import axios from 'axios'

const page_size=6
const DashBoardAllFoods = () => {
   const [allfoods, setAllFoods]=useState([])
   const [page,setPage]=useState(1)
   const [numOfPage,setNumOfPage]=useState(1)
   const [loading,setLoading]=useState(false)
   
  useEffect(()=>{
  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${BASE_URL}/api/all-foods/`, { params:{page, page_size} })

      if(res.status === 200){
        const data = res.data.result
        setAllFoods(data)
        setPage(res.data.current_page)
        setNumOfPage(res.data.num_of_pages)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  fetchData()
}, [page])

  
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
    <div className='overflow-x-auto'>
      <h2 className='text-center font-bold text-2xl'>All Foods</h2>
      <div className='overflow-x-auto rounded-box border-[2px] border-base-context/5 bg-base-100'>
          <table className='table'>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Origin</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Rating</th>
                </tr>
              </thead>

              <tbody>
                  {
                    loading? (<TableSkeleten rows={10} columns={9}/>)
                      :(allfoods.length>0? (allfoods.map((item,idx)=>(
                            <tr key={idx}>
                              <th>{(page-1)*page_size+(idx+1)}</th>
                              <td> <img src={item.image} alt={item.name} className='h-12 w-12 rounded-xl'/></td>
                              <td>{item.name}</td>
                              <td>{item.description}</td>
                              <td>{item.category}</td>
                              <td>{item.origin}</td>
                              <td>{item.price}</td>
                              <td>{item.quantity}</td>
                              <td>{item.rating}</td>
                            </tr>
                          ))): ( <tr> <td colSpan="9" className="text-center">No foods</td> </tr> )
                        )
                                          
                      }

                  </tbody>
          </table>
      </div>
          
          <div className='flex justify-center items-center gap-5 w-full mb-5'>
            <button onClick={goToPrevious} disabled={page===1} className='hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'>Prev</button>

            <span className='text-gray-700'>Page{page} of {numOfPage}</span>

            <button onClick={goToNext} disabled={page===numOfPage} className='hover:cursor-pointer px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed'>Next</button>
          </div>
    </div>  
  )
}

export default DashBoardAllFoods





// import React, { useEffect, useState } from "react";
// import { BASE_URL } from "../../utils/Constants";
// import TableSkeleten from "../../components/common/TableSkeleten";
// import axios from "axios";

// const page_size = 6;

// const DashBoardAllFoods = () => {
//   const [allFoods, setAllFoods] = useState([]); // [] দিয়ে শুরু safe
//   const [page, setPage] = useState(1);
//   const [numOfPage, setNumOfPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null); // নতুন error state

//   // Fetch function আলাদা রাখা হলো (reusability এর জন্য)
//   const fetchData = async (currentPage) => {
//     try {
//       setLoading(true);
//       setError(null); // নতুন request হলে error clear
//       const res = await axios.get(`${BASE_URL}/api/all-foods/`, {
//         params: { page: currentPage, page_size },
//       });

//       if (res.status === 200) {
//         const { result, current_page, num_of_pages } = res.data;
//         setAllFoods(result);
//         setPage(current_page);
//         setNumOfPage(num_of_pages);
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load foods. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect
//   useEffect(() => {
//     fetchData(page);
//   }, [page]);

//   // Pagination handlers
//   const goToPrevious = () => page > 1 && setPage((prev) => prev - 1);
//   const goToNext = () => page < numOfPage && setPage((prev) => prev + 1);

//   return (
//     <div className="overflow-x-auto">
//       <h2 className="text-center font-bold text-2xl mb-4">All Foods</h2>

//       <div className="overflow-x-auto rounded-box border-[2px] border-base-context/5 bg-base-100">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>SL</th>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Category</th>
//               <th>Origin</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Rating</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <TableSkeleten rows={10} columns={9} />
//             ) : error ? (
//               <tr>
//                 <td colSpan="9" className="text-center text-red-500">
//                   {error}
//                 </td>
//               </tr>
//             ) : allFoods.length > 0 ? (
//               allFoods.map((item, idx) => (
//                 <tr key={item.id || idx}>
//                   <th>{(page - 1) * page_size + (idx + 1)}</th>
//                   <td>
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-12 w-12 rounded-xl"
//                     />
//                   </td>
//                   <td>{item.name}</td>
//                   <td>{item.description}</td>
//                   <td>{item.category}</td>
//                   <td>{item.origin}</td>
//                   <td>{item.price}</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.rating}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9" className="text-center">
//                   No foods
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center items-center gap-3 w-full mt-4 mb-5">
//         <button
//           onClick={goToPrevious}
//           disabled={page === 1}
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Prev
//         </button>

//         {/* Page numbers */}
//         {Array.from({ length: numOfPage }, (_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setPage(idx + 1)}
//             className={`px-3 py-1 rounded-lg ${
//               page === idx + 1
//                 ? "bg-gray-800 text-white"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             {idx + 1}
//           </button>
//         ))}

//         <button
//           onClick={goToNext}
//           disabled={page === numOfPage}
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DashBoardAllFoods;

// পরিবর্তন যা করা হলো
// allFoods এখন [] দিয়ে initialize ✅
// Error state handle করা হয়েছে, error হলে টেবিলে দেখাবে ✅
// fetchData আলাদা ফাংশন করা হয়েছে (clean & reusable) ✅
// Page numbers (1,2,3...) যুক্ত করা হয়েছে ✅
// ছোটখাটো UI spacing ও readability improve করা হয়েছে ✅
