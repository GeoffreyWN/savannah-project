import PropTypes from 'prop-types'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { BookmarkIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAlbumPhotos,
  selectAlbumPhotos,
  selectLoading,
  selectModalOpen,
  setPhoto,
  toggleModal
} from '../../containers/Home/store'

const PhotoCard = lazy(() => import('../PhotoCard'))
const Loader = lazy(() => import('../Loader'))
const Modal = lazy(() => import('../Modal'))
const EditForm = lazy(() => import('../EditForm'))

const SingleAlbum = ({ album }) => {
  const [photo, setEditPhoto] = useState({})

  const { title, id: albumId } = album

  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const photos = useSelector(selectAlbumPhotos)

  useEffect(() => {
    dispatch(fetchAlbumPhotos(albumId))
  }, [dispatch, albumId])

  const modalOpen = useSelector(selectModalOpen)

  const openModal = (editPhoto) => {
    dispatch(toggleModal(true))
    setEditPhoto(editPhoto)
  }

  const closeModal = () => {
    dispatch(toggleModal(false))
    dispatch(setPhoto({}))
  }

  return (
    <>
      <Helmet>
        <title>SI | ALBUM</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <div className='max-w-screen-xl w-full px-6 md:px-8 m-auto'>
          <div className='flex space-x-16 '>
            <div className=' -mt-20 mx-auto p-4 md:p-10 mb-10 w-full bg-white rounded-xl shadow-xl'>
              <div className='flex items-center '>
                <BookmarkIcon className='h-10 w-10 text-purple-600 mr-3 ' />
                <span className='font-extrabold font-montserrat text-sil-dark text-xl md:text-3xl'>
                  <span className='mr-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                    Album {albumId} :
                  </span>
                  {title}
                </span>
              </div>

              {loading ? (
                <Loader />
              ) : (
                <div className='mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 mt-12 md:mt-20 '>
                  {photos.map((item) => {
                    return (
                      <div key={item.id}>
                        <PhotoCard photo={item} openModal={openModal} />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Suspense>

      <Modal isOpen={modalOpen} closeModal={closeModal}>
        <EditForm photo={photo} closeModal={closeModal} />
      </Modal>
    </>
  )
}

SingleAlbum.propTypes = {
  album: PropTypes.object
}

export default SingleAlbum
