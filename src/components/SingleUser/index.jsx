import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { images } from '../../assets/images'
import {
  EnvelopeIcon,
  HashtagIcon,
  MapPinIcon,
  PhoneIcon,
  BookmarkIcon
} from '@heroicons/react/24/solid'

import { TagIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const SingleUser = ({ user, albums }) => {
  const { name, username, email, address, phone, company } = user

  return (
    <>
      <Helmet>
        <title>SI | USER</title>
      </Helmet>
      <div className='max-w-screen-xl w-full px-8 m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2 mb-4'>
          <div className='col-span-1 mx-auto md:mx-0 rounded-full -my-20 md:-my-24 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-r from-pink-200 to-purple-500 shadow-lg shadow-purple-300 '>
            <img
              src={images.avatar}
              alt='user-avatar'
              className='rounded-full p-1 w-40 h-40 md:w-60 md:h-60'
            />
          </div>
          <div className='pt-28 md:pt-4 col-span-2'>
            <h1 className='font-extrabold font-montserrat text-sil-dark text-2xl mb-6'>
              {name}
            </h1>

            <div className='flex items-center mb-4'>
              <HashtagIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
              <span className='text-sil-dark'>{username} </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 items-center mb-10'>
              <div className='flex items-center'>
                <EnvelopeIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
                <span className='text-sil-dark'>{email} </span>
              </div>

              <div className='flex items-center'>
                <PhoneIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
                <span className='text-sil-dark'>{phone}</span>
              </div>
              <div className='flex items-center'>
                <MapPinIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
                <span className='text-sil-dark'>{address?.street} </span>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 p-6 w-full bg-white mt-16 md:mt-20 rounded-xl shadow-xl'>
              <div className='space-y-4 md:mr-6 mb-12 md:mb-0 pt-3 '>
                <h2 className='text-sil-dark font-montserrat  text-xl font-semibold pb-3'>
                  Company Details
                </h2>

                <div className='flex items-center'>
                  <TagIcon className='h-5 w-5 text-sil-dark mr-3 ' />
                  <span className='text-sil-dark'>{company?.name} </span>
                </div>

                <div className='flex items-center'>
                  <LightBulbIcon className='h-5 w-5 text-sil-dark mr-3 ' />
                  <span className='text-sil-dark'>{company?.catchPhrase} </span>
                </div>

                <div className='flex items-center'>
                  <LightBulbIcon className='h-5 w-5 text-sil-dark mr-3 ' />
                  <span className='text-sil-dark'>{company?.bs} </span>
                </div>
              </div>

              <div className='bg-red-50 rounded-xl space-y-6 px-6 py-4 '>
                <h2 className='text-sil-dark text-xl font-montserrat font-semibold pb-3'>
                  Album
                </h2>

                {albums.map(({ title, id: albumId }) => {
                  return (
                    <div
                      key={albumId + title}
                      className='flex items-center text-left justify-between cursor-pointer'
                    >
                      <BookmarkIcon className='h-5 w-5 text-purple-600 mr-4 ' />
                      <span className='hidden md:block text-sil-dark mr-4'>
                        {title.slice(0, 15) + '...'}
                      </span>

                      <span className='md:hidden text-sil-dark mr-4'>
                        {title.slice(0, 6) + '...'}
                      </span>
                      <Link to={`/albums/${albumId}`} className='explore-btn'>
                        explore
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SingleUser.propTypes = {
  user: PropTypes.object,
  albums: PropTypes.array
}

export default SingleUser
