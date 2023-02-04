import { createSlice } from '@reduxjs/toolkit'
import {
  getAlbumPhotos,
  getSingleAlbum,
  getSingleUser,
  getUserAlbums,
  getUsers,
  updatePhotoTitle
} from '../../../api/users'

const initialState = {
  isLoading: true,
  isSubmitting: false,
  errors: {},
  users: [],
  user: {},
  userAlbums: [],
  album: {},
  albumPhotos: [],
  modalOpen: false,
  photo: {}
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUserAlbums: (state, action) => {
      state.userAlbums = action.payload
    },
    setAlbum: (state, action) => {
      state.album = action.payload
    },
    setAlbumPhotos: (state, action) => {
      state.albumPhotos = action.payload
    },
    toggleModal: (state, action) => {
      state.modalOpen = action.payload
    },
    setPhoto: (state, action) => {
      state.photo = action.payload
    }
  }
})

export const {
  setIsLoading,
  setIsSubmitting,
  setUsers,
  setUser,
  setUserAlbums,
  setAlbum,
  setAlbumPhotos,
  toggleModal,
  setPhoto
} = usersSlice.actions

export const fetchUsers =
  (loading = false) =>
  async (dispatch) => {
    try {
      const { data } = await getUsers()
      dispatch(setUsers(data))
      dispatch(setIsLoading(loading))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const fetchSingleUser =
  (userId, loading = false) =>
  async (dispatch) => {
    try {
      const { data } = await getSingleUser(userId)
      dispatch(setUser(data[0]))

      dispatch(setIsLoading(loading))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const fetchUserAlbums =
  (userId, loading = false) =>
  async (dispatch) => {
    try {
      const { data } = await getUserAlbums(userId)
      dispatch(setUserAlbums(data))
      dispatch(setIsLoading(loading))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const fetchSingleAlbum =
  (albumId, loading = false) =>
  async (dispatch) => {
    try {
      const { data } = await getSingleAlbum(albumId)
      dispatch(setAlbum(data[0]))

      dispatch(setIsLoading(loading))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const fetchAlbumPhotos =
  (albumId, loading = false) =>
  async (dispatch) => {
    try {
      const { data } = await getAlbumPhotos(albumId)
      dispatch(setAlbumPhotos(data))

      dispatch(setIsLoading(loading))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const updatePhoto =
  ({ photoId, title }) =>
  async (dispatch) => {
    try {
      const { data } = await updatePhotoTitle({ photoId, title })
      dispatch(setPhoto(data))
      dispatch(setIsSubmitting(false))

      // dispatch(toggleModal(false))
    } catch (err) {
      // add error handling logic
      console.log(err)
    }
  }

export const selectLoading = (state) => state.users.isLoading
export const selectUsers = (state) => state.users.users
export const selectUser = (state) => state.users.user
export const selectUserAlbums = (state) => state.users.userAlbums
export const selectAlbum = (state) => state.users.album
export const selectAlbumPhotos = (state) => state.users.albumPhotos
export const selectModalOpen = (state) => state.users.modalOpen
export const selectPhoto = (state) => state.users.photo
export const selectSubmitting = (state) => state.users.isSubmitting

export default usersSlice.reducer
