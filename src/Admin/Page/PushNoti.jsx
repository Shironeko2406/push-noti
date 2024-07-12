import React, { useEffect } from 'react'
import { generateToken, messaging,   } from '../../FireBaseConfig/Config'
import { onMessage } from 'firebase/messaging'

const PushNoti = () => {
    useEffect(()=>{
        generateToken()
        onMessage(messaging, (payload)=>{
          console.log(payload)
        })
    },[])

  return (
    <div>
      
    </div>
  )
}

export default PushNoti
