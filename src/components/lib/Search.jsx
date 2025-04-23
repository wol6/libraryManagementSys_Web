import React, { useState } from 'react'
import Ax from './axiosinstance'
import { useDispatch } from 'react-redux'
import { setSearchResults } from '../redux/bookSlice'

function Search() {
    const [searchData, setSearchData] = useState('')
    const dispatch = useDispatch()

    function handleChange(e) {
        // setSearchData(prev => {
        //     return { ...prev, [e.target.name]:  }
        // })
        setSearchData(e.target.value)
    }
    async function handleSearch() {
        try {
            const { data: resp } = await Ax.get('/search', {
                params: {
                    name: searchData
                }
            })
            if (resp.success) {
                dispatch(setSearchResults(resp.searchResult))
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <div className='border-1 w-96 mr-40 flex justify-between rounded-md text-cyan-800'>
                <input type="text" onChange={handleChange} name='search'
                    className='flex-1 outline-none pl-2 ' placeholder='search' />
                <button className='m-1 cursor-pointer'
                onClick={handleSearch}>search</button>
            </div>
        </>
    )
}

export default Search