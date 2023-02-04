import axios from 'axios'
import { requestDefaults } from '.'

const { baseURL, headers } = requestDefaults

export const getUsers = () => axios.get(`${baseURL}/users`, { headers })
export const getSingleUser = (userId) =>
  axios.get(`${baseURL}/users?id=${userId}`, { headers })
export const getUserAlbums = (userId) =>
  axios.get(`${baseURL}/albums?userId=${userId}`, { headers })
export const getSingleAlbum = (albumId) =>
  axios.get(`${baseURL}/albums?id=${albumId}`, { headers })
export const getAlbumPhotos = (albumId) =>
  axios.get(`${baseURL}/photos?albumId=${albumId}`, { headers })

export const updatePhotoTitle = (data) =>
  axios.patch(`${baseURL}/photos/${data.photoId}`, data, { headers })
