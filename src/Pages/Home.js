import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserStart } from '../Redux/Actions/Actions';

const Home = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => console.log(state))

    useEffect(() => {
        dispatch(loadUserStart())
    }, [])

    return (
        <div>
            Home
        </div>
    )
}

export default Home
