import PropTypes from 'prop-types'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { images } from '../../assets/images'
import {
  EnvelopeIcon,
  HashtagIcon,
  MapPinIcon,
  PhoneIcon,
  BookmarkIcon
} from '@heroicons/react/24/solid'

import { TagIcon, KeyIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const Loader = lazy(() => import('../Loader'))

const SingleUser = ({ user }) => {
  const { name, username, email, address, phone, company } = user
  return (
    <>
      <Helmet>
        <title>SI | USER</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <div className='max-w-screen-xl w-full px-8 m-auto'>
          <div className='flex space-x-16 '>
            <div className='rounded-full -my-24 w-60 h-60 bg-gradient-to-r from-pink-200 to-purple-500 shadow-lg shadow-purple-300 '>
              <img
                src={images.avatar}
                alt='user-avatar'
                className='rounded-full p-1 w-60 h-60'
              />
            </div>
            <div className='pt-4'>
              <h1 className='font-extrabold font-montserrat text-sil-dark text-2xl mb-6'>
                {name}
              </h1>

              <div className='flex items-center mb-4'>
                <HashtagIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
                <span className='text-sil-dark'>{username} </span>
              </div>

              <div className='flex items-center space-x-4 mb-10'>
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

              <div className='flex p-6 w-full bg-white mt-20 rounded-xl shadow-xl'>
                <div className='space-y-4 mr-6 pt-3 '>
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
                    <KeyIcon className='h-5 w-5 text-sil-dark mr-3 ' />
                    <span className='text-sil-dark'>{company?.bs} </span>
                  </div>
                </div>

                <div className='bg-red-50 rounded-xl space-y-6 px-6 py-4 '>
                  <h2 className='text-sil-dark text-xl font-montserrat font-semibold pb-3'>
                    Album
                  </h2>

                  <div className='flex items-center cursor-pointer'>
                    <BookmarkIcon className='h-5 w-5 text-purple-600 mr-4 ' />
                    <span className='text-sil-dark mr-4'>{company?.name} </span>
                    <button className='explore-btn'>explore</button>
                  </div>

                  <div className='flex items-center cursor-pointer'>
                    <BookmarkIcon className='h-5 w-5 text-purple-600 mr-4 ' />
                    <span className='text-sil-dark mr-4'>{company?.name} </span>
                    <button className='explore-btn'>explore</button>
                  </div>

                  <div className='flex items-center cursor-pointer'>
                    <BookmarkIcon className='h-5 w-5 text-purple-600 mr-4 ' />
                    <span className='text-sil-dark mr-4'>{company?.name} </span>
                    <button className='explore-btn'>explore</button>
                  </div>

                  <div className='flex items-center cursor-pointer'>
                    <BookmarkIcon className='h-5 w-5 text-purple-600 mr-4 ' />
                    <span className='text-sil-dark mr-4'>{company?.name} </span>
                    <button className='explore-btn'>explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

SingleUser.propTypes = {
  user: PropTypes.object
}

export default SingleUser

// const user = {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496'
//     }
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
//   }
// }
