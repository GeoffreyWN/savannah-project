import PropTypes from 'prop-types'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'

import { BookmarkIcon } from '@heroicons/react/24/solid'

const PhotoCard = lazy(() => import('../PhotoCard'))
const Loader = lazy(() => import('../Loader'))

const SingleAlbum = ({ album }) => {
  const { company } = album

  const photos = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796'
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355'
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776'
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97'
    },
    {
      albumId: 1,
      id: 6,
      title: 'accusamus ea aliquid et amet sequi nemo',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2'
    },
    {
      albumId: 1,
      id: 7,
      title: 'officia delectus consequatur vero aut veniam explicabo molestias',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc'
    }
  ]

  return (
    <>
      <Helmet>
        <title>SI | ALBUM</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <div className='max-w-screen-xl w-full px-8 m-auto'>
          <div className='flex space-x-16 '>
            <div className=' -mt-20 mx-auto p-10 mb-10 w-full bg-white rounded-xl shadow-xl'>
              <div className='flex items-center '>
                <BookmarkIcon className='h-10 w-10 text-purple-600 mr-3 ' />
                <span className='font-extrabold font-montserrat text-sil-dark text-3xl'>
                  <span className='mr-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                    Album 1 :
                  </span>
                  {company?.name}
                </span>
              </div>

              <div className='mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 mt-20 '>
                {photos.map((photo) => {
                  return (
                    <div key={photo.id} className=''>
                      <PhotoCard photo={photo} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  )
}

SingleAlbum.propTypes = {
  album: PropTypes.object
}

export default SingleAlbum

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
