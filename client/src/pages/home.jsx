import { useSelector, useDispatch } from 'react-redux'
import { getPodcast } from '../store/slices/podcast/index.js'
import { useEffect  } from 'react'


export default function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPodcast())
    }, [dispatch])
    const podcast = useSelector(state => state.podcast)
    console.log(podcast)

  return (
    <div>HOME</div>
  )
}
