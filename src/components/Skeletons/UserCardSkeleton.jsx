import { FolderPlusIcon, EnvelopeIcon, TagIcon } from '@heroicons/react/24/solid'

const UserCardSkeleton = () => {
  const cards = Array(10).fill(0)
  return (
    <div className='mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 mt-10 md:mt-20 '>
      {cards.map((card, i) => {
        return (
          <div key={i} className='animate-pulse rounded-lg bg-gray-200 mb-32 md:mb-36 '>
            {/* image div */}
            <div className='rounded-md bg-gray-200 relative'>
              <div className='w-60 h-60'></div>

              {/* card info */}
              <div className='absolute rounded-xl bg-gray-100 w-11/12 -my-10 left-3 py-2 px-3 '>
                <div className='flex items-center mb-3'>
                  <FolderPlusIcon className='h-5 w-5 text-gray-400 mr-3 ' />
                  <div className='w-32 bg-white rounded-lg text-transparent'>text</div>
                </div>

                <div className='flex items-center mb-3'>
                  <TagIcon className='h-5 w-5 text-gray-400 mr-3 ' />
                  <div className='w-24 bg-white rounded-lg text-transparent'> text </div>
                </div>

                <div className='flex items-center mb-3'>
                  <EnvelopeIcon className='h-5 w-5 text-gray-400 mr-3 ' />
                  <div className=' bg-white rounded-lg text-transparent w-28'> text </div>
                </div>

                <div className='m-auto hidden items-center w-20 group-hover:block mb-4  '>
                  <button className='mx-auto view-btn'> view</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserCardSkeleton
