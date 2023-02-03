import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleAlbum, selectAlbum, selectLoading } from '../Home/store'
import { useParams } from 'react-router-dom'

const Navbar = lazy(() => import('../../components/Navbar'))
const Loader = lazy(() => import('../../components/Loader'))
const SingleAlbum = lazy(() => import('../../components/SingleAlbum'))

const Album = () => {
  const { albumId } = useParams()
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const album = useSelector(selectAlbum)

  useEffect(() => {
    dispatch(fetchSingleAlbum(albumId))
  }, [dispatch, albumId])

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-hero-one w-full bg-repeat bg-cover bg-top h-80 '>
        <Navbar />
      </div>
      {loading ? <Loader /> : <SingleAlbum album={album} />}
    </Suspense>
  )
}

export default Album
