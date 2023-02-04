import PropTypes from 'prop-types'
import { FolderPlusIcon, EnvelopeIcon, TagIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAlbums, selectUserAlbums } from '../../containers/Home/store'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  const { id: userId, name, email } = user
  const dispatch = useDispatch()
  const userAlbums = useSelector(selectUserAlbums)

  useEffect(() => {
    dispatch(fetchUserAlbums(userId))
  }, [dispatch, userId])

  return (
    <Link to={`/users/${userId}`}>
      <div className='mb-32 md:mb-36 hover:scale-105 transition-all duration-300 ease-in-out'>
        {/* image div */}
        <div className='rounded-md relative group cursor-pointer'>
          <img
            src='https://picsum.photos/200/300'
            alt='user_image'
            loading='lazy'
            className='rounded-xl w-full hover:scale-105 transition-all duration-300 ease-in-out '
          />
          {/* card info */}
          <div className='absolute rounded-xl bg-white shadow-lg w-11/12 -my-10 left-3 py-2 px-3 hover:shadow-xl '>
            <div className='flex items-center mb-3'>
              <FolderPlusIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
              <span className='text-sil'> {userAlbums?.length} Albums </span>
            </div>

            <div className='flex items-center mb-3'>
              <TagIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
              <span className='text-emerald-500'>{name} </span>
            </div>

            <div className='flex items-center mb-7'>
              <EnvelopeIcon className='h-5 w-5 text-sil-dark mr-3 ' />{' '}
              <span className='text-sil-dark'>{email} </span>
            </div>

            <div className='m-auto hidden items-center w-20 group-hover:block mb-4  '>
              <button className='mx-auto view-btn'> view</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

UserCard.propTypes = {
  user: PropTypes.object
}

export default UserCard
