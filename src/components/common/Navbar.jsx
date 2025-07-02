import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Navbar = () => {
    //only for see in console
    const {user,logout}=useContext(AuthContext)
    console.log(user)

    //logout func
    const handleLogout=()=>{
        logout()
    }

    //UI section
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div className="">
                <span className="btn btn-ghost text-xl"> <Link to={'/'}>Foody</Link></span>
            </div>

            <div>
                <ul className='flex gap-5 items-center'>
                    <li className='cursor-pointer font-medium'>
                     <NavLink to='/' className={({ isActive }) => isActive ?                    
                    'px-2 py-1 rounded-lg bg-gray-950 text-white' : 'text-black'}>
                     Home</NavLink></li>

                    <li className='cursor-pointer font-medium'>
                     <NavLink to='/allfoods' className={({ isActive }) => isActive ? 
                     'px-2 py-1 rounded-lg bg-gray-950 text-white' : 'text-black'}>
                     All foods</NavLink></li>
                </ul>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        {
                         user? (
                            <li><button onClick={handleLogout}> Logout</button></li> ) :
                             (<li><Link to={'/login'} className='text-red-600'> Login</Link></li>)
                          
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar