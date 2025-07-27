import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import toast from 'react-hot-toast'

const AddFoodItem = () => {
    const [preview, setPreview] = useState(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0]         //ইউজার যদি ছবি নির্বাচন করে, তাহলে file ধরে।
        if (file) {
            setPreview(URL.createObjectURL(file))  //URL.createObjectURL(file) দিয়ে সেই ছবির preview লিঙ্ক তৈরি করে।
        } else {
            setPreview(null)                      //যদি ফাইল না থাকে, preview ফাঁকা করে দেয়।
        }
    }


    const handleAddFoodItem = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData()

        data.append('title', form.title.value)
        data.append('description', form.description.value)
        data.append('price', form.price.value)
        data.append('quantity', form.quantity.value)
        data.append('origin', form.origin.value)
        data.append('category', form.category.value)
        data.append('image', form.image.files[0])

      //API Reques: axios.post দিয়ে ফর্ম ডেটা সার্ভারে পাঠানো হয়েছে। multipart/form-data ব্যবহার করা হয়েছে কারণ এতে ছবি পাঠানো যায়

        try {
            const res = await axios.post(`${BASE_URL}/api/add-food/`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
            if (res.status == 200) {
                toast.success("Food item added successfully")
                form.reset()      // সফল হলে toast মেসেজ দেখায়, ফর্ম রিসেট করে এবং preview মুছে দেয়।
                setPreview(null)
            }
        } catch (error) {
            console.log(error)   // যদি কোনো সমস্যা হয় তাহলে কনসোলে দেখায়।
        }
    }


//একটি ফর্ম তৈরি করা হয়েছে, যা handleAddFoodItem ফাংশনে ডেটা পাঠায়। encType='multipart/form-data' দরকার কারণ এতে ফাইল (ছবি) থাকে।
    return (
        <div className='my-5'>
            <form onSubmit={handleAddFoodItem} encType='multipart/form-data'

                className='max-w-xl mx-auto space-y-5 p-6 border border-gray-200 rounded-xl shadow-md bg-white'>
                <h2 className='text-2xl text-center font-semibold text-gray-800'>Add new food item</h2>

            {/* সবগুলো ইনপুট ফিল্ড ফর্মে যুক্ত করা হয়েছে, এবং ছবি নির্বাচন করলে preview দেখানোর জন্য preview state আপডেট করা হয়। */}
                <div>
                    <label htmlFor="title" className='bolck text-sm font-medium text-gray-800'>Title</label>
                    <input type="text" name='title' id="title" required className='w-full px-3 py-2 border rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                </div>
                <div>
                    <label htmlFor="description" className='bolck text-sm font-medium text-gray-800'>Description</label>
                    <textarea rows="3" name='description' id="description" required className='w-full px-3 py-2 border rounded-md  shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="category" className='bolck text-sm font-medium text-gray-800'>Category</label>
                        <input type="text" name='category' id="category" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="price" className='bolck text-sm font-medium text-gray-800'>Price</label>
                        <input type="number" step="0.01" name='price' id="price" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="origin" className='bolck text-sm font-medium text-gray-800'>Origin</label>
                        <input type="text" name='origin' id="origin" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="quantity" className='bolck text-sm font-medium text-gray-800'>Quantity</label>
                        <input type="number" name='quantity' id="quantity" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                </div>
                
                {/* ইউজার যদি ছবি নির্বাচন করে, তাহলে preview হিসেবে ফর্মের নিচে সেই ছবি দেখায়। */}
                <div>
                    <label htmlFor="image" className='bolck text-sm font-medium text-gray-800'>Image</label>
                    <input onChange={handleImageChange} type="file" accept='image/*' name='image' id="image" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                </div>

                {preview && (
                    <div className='mt-4'>
                        <img src={preview} alt="preview" className='w-full max-h-64 object-cover rounded-md' />
                    </div>
                )
                }
                {/* এই বাটনে ক্লিক করলে ফর্ম সাবমিট হয় এবং নতুন ফুড আইটেম যোগ হয়। */}
                <button type='submit' className='cursor-pointer font-semibold w-full bg-slate-950 hover:bg-white hover:text-black border border-slate-950 text-white py-2 px-4 rounded-md transition-all duration-500 focus:ring-2 focus:ring-slate-400 focus:ring-offset-1'>Add Food</button>
            </form>
        </div>
    )
}

export default AddFoodItem