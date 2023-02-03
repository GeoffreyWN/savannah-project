/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import { TagIcon } from '@heroicons/react/24/solid'
import { lazy, Suspense } from 'react'

const Loader = lazy(() => import('../Loader'))

const PhotoCard = ({ photo, openModal }) => {
  const { title, url } = photo

  return (
    <Suspense fallback={<Loader />}>
      <div
        onClick={() => openModal(photo)}
        className='mb-24  hover:scale-105 transition-all duration-300 ease-in-out'
      >
        {/* image div */}
        <div className='rounded-md relative group cursor-pointer'>
          <img
            src={url}
            alt='photo_image'
            loading='lazy'
            className='rounded-xl w-full hover:scale-105 transition-all duration-300 ease-in-out '
          />
          {/* card info */}
          <div className='absolute rounded-xl bg-white shadow-lg w-11/12 -my-10 left-3 py-2 px-3 hover:shadow-xl '>
            <div className='flex items-center my-4'>
              <TagIcon className='h-8 w-8 text-sil-dark mr-3 ' />{' '}
              <span className='text-emerald-500 text-semibold'>{title} </span>
            </div>

            <div className='m-auto hidden items-center w-20 group-hover:block mb-2 '>
              <button onClick={() => openModal(photo)} className='mx-auto view-btn'>
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

PhotoCard.propTypes = {
  photo: PropTypes.object,
  openModal: PropTypes.func
}

export default PhotoCard
