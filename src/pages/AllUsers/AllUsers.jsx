import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    // const [users, setUsers] = useState([])
    const { data: users=[], isPending, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            
            const res = await axiosSecure.get('/users')
            
            // console.log(headers)
            return res.data
        }
    })
    console.log(users)
    const handleMakeAdmin = async (id) => {
        const { data } = await axiosSecure.patch(`/user/admin/${id}`)
        refetch()
        console.log(data)
    }
    // if(isPending){
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }
    console.log(users)
    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h3 className='text-2xl'>All Users</h3>
                <h3 className='text-2xl'>Total: {users?.length}</h3>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'admin' 
                                            :<button onClick={() => handleMakeAdmin(user._id)} className='btn'>Make Admin</button>
                                        }
                                        
                                    </td>
                                    <td>Delete</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;