import { TagIcon, BookmarkIcon } from '@heroicons/react/24/solid'

const SingleAlbumSkeleton = () => {
  const cards = Array(10).fill(0)

  return (
    <div className='max-w-screen-xl w-full px-6 md:px-8 m-auto'>
      <div className='flex space-x-16 '>
        <div className=' -mt-20 mx-auto p-4 md:p-10 mb-10 w-full bg-white rounded-xl shadow-xl'>
          <div className='flex items-center '>
            <BookmarkIcon className='h-10 w-10 text-gray-300 mr-3 ' />

            <span className='mr-3 w-full p-2 text-transparent bg-gray-200 rounded-lg '>
              text
            </span>
          </div>

          <div className='mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 mt-12 md:mt-20  animate-pulse'>
            {cards.map((card, i) => {
              return (
                <div key={i} className='mb-20 md:mb-24 bg-gray-200'>
                  <div className='rounded-md relative group'>
                    <div className='absolute rounded-xl bg-gray-50 w-11/12 -my-10 left-3 py-2 px-3'>
                      <div className='flex items-center my-4'>
                        <TagIcon className='h-8 w-8 text-gray-300 mr-3 ' />{' '}
                        <div className=' bg-gray-200 rounded-lg p-4 hidden md:block w-full text-green-200'>
                          text
                        </div>
                        <div className=' bg-gray-200 rounded-lg p-2 md:hidden w-full text-transparent'>
                          text
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleAlbumSkeleton
