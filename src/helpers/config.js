const envVars = process.env

const config = (env) => {
  const key = `REACT_APP_${env}`

  if (!envVars[key]) throw new Error('Config missing for' + key)

  return envVars[key]
}

export default config
