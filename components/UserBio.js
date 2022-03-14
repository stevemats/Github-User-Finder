import React from 'react'

const UserBio = ({bio}) => {
  return (
    <p className="font-mono text-sm font-medium text-gray-800 dark:text-gray-300 text-center ">
          Bio-{bio === null ? 'Not Added' :bio}
    </p>
  )
}

export default UserBio