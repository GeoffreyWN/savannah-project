import { lazy, Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectLoading, selectUsers } from '../../containers/Home/store'

const UserCard = lazy(() => import('../UserCard'))
const Loader = lazy(() => import('../../components/Loader'))

// const users = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//       }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618'
//       }
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     }
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653'
//       }
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications'
//     }
//   }
// ]

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
            <h1 className='font-extrabold font-montserrat text-5xl'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-sil'>
                ALPHA
              </span>{' '}
              <span className='text-sil-dark'>TEAM</span>
            </h1>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className='mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 mt-20 '>
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
