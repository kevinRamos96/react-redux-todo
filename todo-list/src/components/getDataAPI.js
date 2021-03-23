import { useDispatch, useSelector } from 'react-redux'
import { getTask } from '../redux/actions'

const GetDataFromAPI = () => {
    const dispatch = useDispatch()
    // const selector = useSelector(state => state)
    //create redux state if there is data on the dB
    dispatch(getTask())
    //console.log("getDataAPI.js Data", data)
    // data.map(input => console.log("data input map", input))
    //console.log("getDataAPI.js", selector)
    return null
}

export default GetDataFromAPI