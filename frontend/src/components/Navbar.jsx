import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logUserOut } from '../slices/authSlice'
import { toast } from 'react-toastify'

function Navbar() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logUserOut())
    toast.info('Logged out successfully.')
    navigate('/auth')
  }

  return (
    <nav className='flex justify-between items-center p-6 shadow-md my-6 rounded-lg transparentCard'>
      <NavLink to='/posts' className='outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded'>
        <div className='flex flex-col items-center cursor-pointer'>
          <p className='text-xl font-semibold leading-6 text-orange-500 uppercase'>
            Blog-Site
          </p>
          <p className='text-xs font-medium leading-3 tracking-[0.22em] text-yellow-600'>
            ~Interact To World
          </p>
        </div>
      </NavLink>

      {user ? (
        <div className='flex items-center space-x-3'>
          <div
            className='w-9 h-9 bg-blue-700 text-white rounded-full flex justify-center items-center font-bold uppercase'
            title={user.result.name}
          >
            {user?.result?.name?.charAt(0)}
          </div>
          <button
            onClick={handleLogout}
            className='bg-red-600 hover:bg-red-700 transition-colors text-white cursor-pointer py-1 px-4 rounded-md uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400'
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate('/auth')}
          className='bg-green-700 hover:bg-green-800 transition-colors text-white py-1 px-4 rounded-md uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500'
        >
          Sign In
        </button>
      )}
    </nav>
  )
}

export default Navbar
