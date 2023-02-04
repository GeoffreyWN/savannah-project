import { lazy, Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectLoading, selectUsers } from '../../containers/Home/store'

const UserCard = lazy(() => import('../UserCard'))
const Loader = lazy(() => import('../../components/Loader'))
const UserCardSkeleton = lazy(() => import('../../components/Skeletons/UserCardSkeleton'))

const Users = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectUsers)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>SI | USERS</title>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <div className='max-w-screen-xl w-full p-2 m-auto'>
          <div className='text-center my-10'>
            <h1 className='font-extrabold font-montserrat text-2xl md:text-4xl'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                ALPHA
              </span>{' '}
              <span className='text-sil-dark'>TEAM</span>
            </h1>
          </div>

          {loading ? (
            <UserCardSkeleton />
          ) : (
            <div className='mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 mt-10 md:mt-20 '>
              {users.map((user) => {
                return (
                  <div key={user.id}>
                    <UserCard user={user} />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </Suspense>
    </>
  )
}

export default Users
