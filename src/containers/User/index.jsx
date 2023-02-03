import { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('../../components/Navbar'))
const SingleUser = lazy(() => import('../../components/SingleUser'))
const Loader = lazy(() => import('../../components/Loader'))

const User = () => {
  const user = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className='bg-hero-one w-full bg-repeat bg-cover bg-top h-80 '>
        <Navbar />
      </div>
      <SingleUser user={user} />
    </Suspense>
  )
}

export default User
