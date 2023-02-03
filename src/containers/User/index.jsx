import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  fetchSingleUser,
  fetchUserAlbums,
  selectLoading,
  selectUser,
  selectUserAlbums
} from '../Home/store'

const Navbar = lazy(() => import('../../components/Navbar'))
const SingleUser = lazy(() => import('../../components/SingleUser'))
const Loader = lazy(() => import('../../components/Loader'))

const User = () => {
  const { userId } = useParams()

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const albums = useSelector(selectUserAlbums)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchSingleUser(userId))
    dispatch(fetchUserAlbums(userId))
  }, [dispatch, userId])

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-hero-one w-full bg-repeat bg-cover bg-top h-80 '>
        <Navbar />
      </div>
      {loading ? <Loader /> : <SingleUser user={user} albums={albums} />}
    </Suspense>
  )
}

export default User
