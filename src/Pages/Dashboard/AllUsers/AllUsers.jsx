// import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserSecret, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const result = await fetch('https://bistro-boss-server-side.vercel.app/users');
    //     return result.json();
    // })

    // make user admin
    const HandleMakeAdmin = (user) => {
        fetch(`https://bistro-boss-server-side.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: true,
                        confirmButtonText: 'Yes',
                        // timer: 1500
                    })
                }

            })
    };


    const HandleDelete = (user) => {
        console.log(user)
    }

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>

            <SectionTitle subHeading="How many??" heading="MANAGE ALL USERS"></SectionTitle>

            <h3 className="text-2xl font-semibold my-4 lg:my-5">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th >Roles</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className=''>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            // 'admin'
                                            <button title='Admin' className="btn btn-ghost bg-emerald-300  text-black"><FaUserSecret ></FaUserSecret></button>
                                            :
                                            <button onClick={() => HandleMakeAdmin(user)} title='Make Admin' className="btn btn-ghost bg-orange-600  text-black"><FaUserShield ></FaUserShield></button>
                                    }
                                </td>
                                <td><button onClick={() => HandleDelete(user)} title='Delete User' className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;