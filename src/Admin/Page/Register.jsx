import React, { useState } from 'react'
import { Button, Form, Grid, Input, theme, Typography, Upload } from "antd";
import { LockOutlined, MailOutlined, UserOutlined, UploadOutlined } from "@ant-design/icons";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { imageDB } from '../../FireBaseConfig/Config';
import { v4 as uuidv4 } from 'uuid';

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

const Register = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
  const [avatarFile, setAvatarFile] = useState(null);

  const onFinish = async (values) => {
    if (avatarFile) {
      const shortUUID = uuidv4().split('-')[0]; // Lấy phần đầu tiên của UUID để rút gọn
      const storageRef = ref(imageDB, `avatars/${shortUUID}_${avatarFile.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, avatarFile);
        const downloadURL = await getDownloadURL(snapshot.ref);

        const formUserRegister = {
          username: values.username,
          password: values.password,
          email: values.email,
          avatarURL: downloadURL,
        };

        console.log(formUserRegister)

      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    } else {
      const formUserRegister = {
        username: values.username,
        password: values.password,
        email: values.email,
        avatarURL: null, // hoặc một giá trị mặc định
      };
      console.log(formUserRegister)
    }
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
      width: "380px"
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center"
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%"
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF" />
            <path
              d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z"
              fill="white"
            />
            <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white" />
            <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white" />
          </svg>

          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Join us! Create an account to get started.
          </Text>
        </div>
        <Form
          name="normal_signup"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            extra="Password needs to be at least 8 characters."
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="avatar"
            valuePropName="fileList"
            getValueFromEvent={e => Array.isArray(e) ? e : e && e.fileList}
            extra="Upload your avatar"
          >
            <Upload 
              name="avatar" 
              listType="picture" 
              beforeUpload={(file) => {
                setAvatarFile(file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link href="">Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

export default Register


// import React, { useState } from 'react';
// import { Button, Form, Grid, Input, Typography, Upload, Spin, theme } from 'antd';
// import { LockOutlined, MailOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { imageDB } from '../../FireBaseConfig/Config';
// import { v4 as uuidv4 } from 'uuid';

// const { useToken } = theme;
// const { useBreakpoint } = Grid;
// const { Text, Title, Link } = Typography;

// const Register = () => {
//   const { token } = useToken();
//   const screens = useBreakpoint();
//   const [avatarFile, setAvatarFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     if (avatarFile) {
//       const shortUUID = uuidv4().split('-')[0];
//       const storageRef = ref(imageDB, `avatars/${shortUUID}_${avatarFile.name}`);
//       try {
//         const snapshot = await uploadBytes(storageRef, avatarFile);
//         const downloadURL = await getDownloadURL(snapshot.ref);

//         const formUserRegister = {
//           username: values.username,
//           password: values.password,
//           email: values.email,
//           avatarURL: downloadURL,
//         };

//         // Giả lập gọi API
//         setTimeout(() => {
//           console.log(formUserRegister)
//           setLoading(false);
//         }, 2000); // Thời gian giả lập 2 giây
//       } catch (error) {
//         console.error('Error uploading file: ', error);
//         setLoading(false);
//       }
//     } else {
//       const formUserRegister = {
//         username: values.username,
//         password: values.password,
//         email: values.email,
//         avatarURL: null,
//       };
//       // Giả lập gọi API
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000); // Thời gian giả lập 2 giây
//     }
//   };

//   const styles = {
//     container: {
//       margin: '0 auto',
//       padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
//       width: '380px',
//     },
//     forgotPassword: {
//       float: 'right',
//     },
//     header: {
//       marginBottom: token.marginXL,
//       textAlign: 'center',
//     },
//     section: {
//       alignItems: 'center',
//       backgroundColor: token.colorBgContainer,
//       display: 'flex',
//       height: screens.sm ? '100vh' : 'auto',
//       padding: screens.md ? `${token.sizeXXL}px 0px` : '0px',
//     },
//     signup: {
//       marginTop: token.marginLG,
//       textAlign: 'center',
//       width: '100%',
//     },
//     text: {
//       color: token.colorTextSecondary,
//     },
//     title: {
//       fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
//     },
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF" />
//             <path d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z" fill="white" />
//             <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white" />
//             <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white" />
//           </svg>

//           <Title style={styles.title}>Sign up</Title>
//           <Text style={styles.text}>Join us! Create an account to get started.</Text>
//         </div>
//         <Spin spinning={loading}>
//           <Form name="normal_signup" onFinish={onFinish} layout="vertical" requiredMark="optional">
//             <Form.Item
//               name="username"
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input your Username!',
//                 },
//               ]}
//             >
//               <Input prefix={<UserOutlined />} placeholder="Username" />
//             </Form.Item>
//             <Form.Item
//               name="email"
//               rules={[
//                 {
//                   type: 'email',
//                   required: true,
//                   message: 'Please input your Email!',
//                 },
//               ]}
//             >
//               <Input prefix={<MailOutlined />} placeholder="Email" />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               extra="Password needs to be at least 8 characters."
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input your Password!',
//                 },
//               ]}
//             >
//               <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
//             </Form.Item>
//             <Form.Item name="avatar" valuePropName="fileList" getValueFromEvent={e => Array.isArray(e) ? e : e && e.fileList} extra="Upload your avatar">
//               <Upload name="avatar" listType="picture" beforeUpload={(file) => { setAvatarFile(file); return false; }}>
//                 <Button icon={<UploadOutlined />}>Click to upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item style={{ marginBottom: '0px' }}>
//               <Button block type="primary" htmlType="submit" disabled={loading}>
//                 Sign up
//               </Button>
//               <div style={styles.signup}>
//                 <Text style={styles.text}>Already have an account?</Text> <Link href="">Sign in</Link>
//               </div>
//             </Form.Item>
//           </Form>
//         </Spin>
//       </div>
//     </section>
//   );
// };

// export default Register;
