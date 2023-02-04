import config from '../helpers/config'

export const requestDefaults = {
  baseURL: config('BASE_URL'),
  headers: { 'Content-Type': 'application/json' }
}
