import React from 'react'
import cssm from './PageNotFound.module.css'
const PageNotFound = () => {
  return (
    <div className={cssm.error}>
      <h1>404 - Not Found</h1>
      <h2>Page Not Found</h2>
    </div>
  )
}

export default PageNotFound
