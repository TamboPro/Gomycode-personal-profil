import React from 'react'
import photo from '../../images/profilePhoto.jpg'

export default function ProfilePhoto() {
  return (
    <div>
        <div className="text-center">
            <img src={photo} width="100" className="rounded-circle" alt='profile' />
        </div>
    </div>
  )
}
