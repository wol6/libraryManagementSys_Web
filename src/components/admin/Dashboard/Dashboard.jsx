import React from 'react';
import { BookOpen, Users, ClipboardList, Activity } from 'lucide-react';

function Dashboard() {
    return (
        <>
        <div className='mt-10'>
        <h1 className='text-2xl ml-55'>Dashboard Overview</h1>
            <div className='w-[600px] mt-4 ml-50'>
                <div className='flex justify-around'>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <BookOpen className="mx-left text-blue-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Total Books</h2>
                        <p className="text-xl mt-1">120</p>
                    </div>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <Users className="mx-left text-green-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Active Users</h2>
                        <p className="text-xl mt-1">45</p>
                    </div>
                </div>

                <div className='flex justify-around mt-3'>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <ClipboardList className="mx-left text-yellow-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Books Issued Today</h2>
                        <p className="text-xl mt-1">30</p>
                    </div>
                    <div className='border-2 w-[280px] p-12 rounded-xl'>
                        <Activity className="mx-left text-red-500" size={28} />
                        <h2 className="text-lg font-semibold mt-2">Pending Returns</h2>
                        <p className="text-xl mt-1">18</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Dashboard;
