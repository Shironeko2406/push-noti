// import { ref, uploadBytes } from 'firebase/storage'
// import React, { useState } from 'react'
// import { imageDB } from '../../FireBaseConfig/Config'
// import { v4 } from 'uuid'

// const UploadFile = () => {
//   const [image, setImage] = useState(null) // Chuyển đổi sang null để dễ kiểm tra

//   const handleClick = (e) => {
//     e.preventDefault() // Ngăn chặn hành động mặc định của form

//     if (image === null) {
//       alert('Please select an image first')
//       return
//     }

//     const imageRef = ref(imageDB, `files/${v4()}`)
//     console.log(imageRef)
//     uploadBytes(imageRef, image)
//       .then(() => {
//         alert('Image uploaded successfully!')
//       })
//       .catch((error) => {
//         console.error('Error uploading image:', error)
//       })
//   }

//   return (
//     <div>
//       <form className='form'>
//         <input type='file' onChange={(e) => setImage(e.target.files[0])} />
//         <button onClick={handleClick}>Upload</button>
//       </form>
//     </div>
//   )
// }

// export default UploadFile



import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import React, { useState } from 'react'
import { imageDB } from '../../FireBaseConfig/Config'
import { v4 } from 'uuid'

const CreateUser = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password || !avatar) {
      alert('Please fill in all fields')
      return
    }

    const avatarRef = ref(imageDB, `avatars/${v4()}`)

    try {
      // Upload the avatar
      await uploadBytes(avatarRef, avatar)
      // Get the avatar URL
      const avatarURL = await getDownloadURL(avatarRef)
      
      // Create user data
      const userData = {
        username,
        password,
        avatarURL
      }

      // Send request to create user (replace with your API endpoint)
    //   const response = await fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    //   })

    //   if (!response.ok) {
    //     throw new Error('Failed to create user')
    //   }
      console.log(userData)
      alert('User created successfully!')
    } catch (error) {
      console.error('Error creating user:', error)
      alert('Error creating user')
    }
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type='password' 
          placeholder='Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type='file' 
          onChange={(e) => setAvatar(e.target.files[0])} 
        />
        <button type='submit'>Create User</button>
      </form>
    </div>
  )
}

export default CreateUser
