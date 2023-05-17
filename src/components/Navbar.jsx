import React, { useContext } from 'react';
import titlePhoto from '../assets/logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img className='w-40' src={titlePhoto} alt="" />
                </div>
                <div className="flex-none gap-2">
                    <div className='flex gap-10 justify-end items-center'>
                        <Link to='/'>Home</Link>
                        <Link to='/events'>Event's</Link>
                        <Link to='/bookings'>Bookings</Link>
                        {
                            user ?
                                <button onClick={handleLogout} className="btn btn-error"><Link>Logout</Link></button>
                                :
                                <button className="btn btn-warning"><Link to='/login'>Login</Link></button>
                        }
                        <button className="btn btn-black"><Link to='/addVolunteer'>Add Volunteer</Link></button>
                        <button className="btn btn-black"><Link to='/addEvents'>Add Events</Link></button>

                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;