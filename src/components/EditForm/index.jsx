/* eslint-disable comma-dangle */
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectPhoto,
  selectSubmitting,
  setIsSubmitting,
  updatePhoto
} from '../../containers/Home/store'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid'

const EditForm = ({ photo, closeModal }) => {
  const initialState = {
    title: photo.title
  }

  const [formValues, setFormValues] = useState(initialState)
  const updatedPhoto = useSelector(selectPhoto)
  const submitting = useSelector(selectSubmitting)

  const { title } = formValues

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    const photoId = photo.id
    e.preventDefault()

    dispatch(setIsSubmitting(true))
    dispatch(updatePhoto({ photoId, ...formValues }))
  }

  return (
    <div className=' px-5 py-5 max-w-screen-md mx-auto bg-red-50 rounded-xl shadow-xl flex flex-col justify-center'>
      <div className='flex justify-end cursor-pointer'>
        <XMarkIcon onClick={closeModal} className='h-8 w-8 pr-2' />
      </div>

      <div className='flex text-sil-dark mx-auto mb-4'>
        <PencilSquareIcon className='h-8 w-8 pr-2 ' />
        <h2 className='text-2xl font-extrabold font-montserrat text-sil-dark text-center '>
          Edit Photo Title
        </h2>
      </div>

      {updatedPhoto.title ? (
        <div className='flex flex-col text-center'>
          <span className='font-semibold'>Update Successful!</span>
          <span>{updatedPhoto.title}</span>
        </div>
      ) : null}

      <div className='mt-8 max-w-lg mx-auto w-full '>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='w-full'>
            <label className='block text-left'>
              <input
                type='text'
                value={title}
                name='title'
                className='input-style'
                placeholder='Title'
                onChange={(e) => handleChange(e)}
                required
              />
            </label>
          </div>

          <div className=' pt-2 md:pt-6 pb-2 text-center'>
            <button
              type='submit'
              className={`${
                submitting && 'cursor-not-allowed'
              } 'inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow-md rounded-md text-white bg-sil-dark hover:text-sil-dark hover:bg-white transition-all ease-in-out duration-300 '`}
              disabled=''
            >
              {submitting ? (
                <div className='flex'>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  <p>updating...</p>
                </div>
              ) : (
                <p>update</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

EditForm.propTypes = {
  photo: PropTypes.object,
  closeModal: PropTypes.func
}

export default EditForm
