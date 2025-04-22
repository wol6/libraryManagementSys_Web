import React, { useEffect, useState } from 'react';
import { BookOpen, Users, ClipboardList, Activity } from 'lucide-react';
import Ax from '../../lib/axiosinstance';

function Dashboard() {
    const [count,setCount] = useState({
        bookTotalCount:null,
        userCount:null,
        bookAvlCount:null,
        bookReturnCount:null
    })
    useEffect(()=>{
        getDashBoarddOvrView()
    },[])
    async function getDashBoarddOvrView() {
        try{
            const {data:resp} = await Ax.get('/getdashboardcount')
            if(resp.success){
                setCount({
                    bookTotalCount:resp.bookTotalCount,
                    userCount:resp.userCount,
                    bookAvlCount:resp.bookAvlCount,
                    bookReturnCount:resp.bookReturnCount
                })
            }
        }catch(e){
            console.log(e)
        }
    }
    return (
        <>
        <div className='mt-0'>
        <h1 className='text-2xl ml-55'>Dashboard Overview</h1>
            <div className='w-[600px] mt-4 ml-50'>
                <div className='flex justify-around'>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <BookOpen className="mx-left text-blue-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Total Books</h2>
                        <p className="text-xl mt-1">{count.bookTotalCount}</p>
                    </div>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <Users className="mx-left text-green-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Active Users</h2>
                        <p className="text-xl mt-1">{count.userCount}</p>
                    </div>
                </div>

                <div className='flex justify-around mt-3'>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <ClipboardList className="mx-left text-yellow-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Avaliable Books</h2>
                        <p className="text-xl mt-1">{count.bookAvlCount}</p>
                    </div>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <Activity className="mx-left text-red-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Pending Returns</h2>
                        <p className="text-xl mt-1">{count.bookReturnCount}</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Dashboard;
