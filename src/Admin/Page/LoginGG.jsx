// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

// const LoginGG = () => {
//   return (
//     <GoogleLogin
//       onSuccess={(credentialResponse) => {
//         const credentialResponseDecode = jwtDecode(credentialResponse.credential)
//         console.log(credentialResponseDecode.email, credentialResponseDecode.picture);
//         console.log(credentialResponseDecode)
//       }}
//       onError={() => {
//         console.log("Login Failed");
//       }}
//     />
//   );
// };

// export default LoginGG;

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const LoginGG = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', jwtDecode(response.credential));
    // Thực hiện các hành động khác với token hoặc profile của người dùng
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    </div>
  );
}

export default LoginGG;

