import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Table } from "./Admin/Page/Table.jsx";
import UploadFile from "./Admin/Page/UploadFile.jsx";
import FormInput from "./Admin/Page/FormInput.jsx";
import TestModal from "./Admin/Page/TestModal.jsx";
import Register from "./Admin/Page/Register.jsx";
import LoginGG from "./Admin/Page/LoginGG.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Popup from "./Admin/Page/Popup.jsx";
import PushNoti from "./Admin/Page/PushNoti.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={'1077302126764-5egr59hd2g3k5lqo3nl9stkrn6hko56v.apps.googleusercontent.com'}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Table></Table>}></Route> */}
        <Route path="" element={<PushNoti></PushNoti>}></Route>
        <Route path="upload" element={<UploadFile></UploadFile>}></Route>
        <Route path="form" element={<FormInput></FormInput>}></Route>
        <Route path="modal" element={<TestModal></TestModal>}></Route>
        <Route path="popup" element={<Popup></Popup>}></Route>
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
