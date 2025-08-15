import React from 'react'
import food8 from'../../assets/images/food8.jpg'
import food2 from'../../assets/images/food2.jpg'
import food3 from'../../assets/images/food3.jpg'
import food4 from'../../assets/images/food4.jpg'
import food5 from'../../assets/images/food5.jpg'
import food6 from'../../assets/images/food6.jpg'
import food7 from'../../assets/images/food7.jpg'
import food1 from'../../assets/images/food1.jpg'
import { Link } from 'react-router-dom'



const Carousel = () => {
   const bannerImage=[food1,food2,food3,food4,food5,food6,food7,food8]
   const bannerInfo = [
  { 
    img:food1,
     title: "Beef Burger",
    description: "A healthy mix of grilled chicken breast, fresh greens, cherry tomatoes, and a light vinaigrette dressing."
  },
  { 
    img:food2,
    title: "Grilled Chicken Salad",
    description: "Juicy beef patty served with cheese, lettuce, tomato, and a sesame seed bun with crispy fries on the side."
  },
  {
    img:food3,
    title: "Margherita Pizza",
    description: "Classic Italian pizza topped with fresh mozzarella, basil leaves, and tangy tomato sauce on a thin crust."
  },
  {
    img:food4,
    title: "Chocolate Lava Cake",
    description: "Warm and gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream."
  },
  {
    img:food5,
    title: "Spaghetti Carbonara",
    description: "Creamy spaghetti pasta tossed with bacon, eggs, parmesan cheese, and freshly cracked black pepper."
  },
  {
    img:food6,
    title: "Tandoori Chicken",
    description: "Indian-style chicken marinated in yogurt and spices, then roasted to perfection in a tandoor oven."
  },
  {
    img:food7,
    title: "Sushi Platter",
    description: "Assorted sushi rolls with fresh salmon, tuna, avocado, cucumber, and a side of soy sauce and wasabi."
  },
  {
    img:food8,
    title: "Mango Smoothie Bowl",
    description: "A tropical smoothie bowl made with mango, banana, coconut milk, topped with chia seeds and granola."
  }
];

  return (
   <div className="carousel w-full mt-5">
  {
   bannerInfo.map((item,idx)=>
    
   <div key={idx} id={`slide${idx}`} className="carousel-item relative w-full">
   <img src={item.img}   className='w-full h-[600px] rounded-lg'/>

   <div className='absolute left-0 top-0 bg-gradindt-to-r from-[#151515] to-[rgba(21,21,21,0,00)100%] h-full  rounded-lg flex flex-col justify-center'>
      <div className='p-12 w-1/2 space-y-5'>
         <h2 className='text-6xl font-bold text-white'> {item.title} </h2>
         <p className='text white'>{item.description} </p>

         <div className=''>
            <button className='hover:bg-neutral hover:text-white hover:border-[#0da3d6] btn btn-outline text-white'> 
               <Link to={'/allfoods'}> All menues</Link></button>
         </div>

      </div>
   </div>
   {/* button move to write down */}
   <div className='absolute left-5 right-5 bottom-10 flex gap-5 -translate-y-1/2 transform justify-end'>
      <a href={idx==0? `#slide${7}` :`#slide${idx-1}`} className='btn btn-circle bg-neutral text-white hover:border-[#0da3d6]'> ❮ </a>
      <a href={idx==7? `#slide${0}` :`#slide${idx+1}`} className='btn btn-circle bg-neutral text-white hover:border-[#0da3d6]'> ❯ </a>
   </div>

  </div>)
  }
  </div>
)
    
}

export default Carousel

