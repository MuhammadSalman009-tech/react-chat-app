import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to UniChat!</h2>
        <div className="login-button google">
          <GoogleOutlined /> Login with Google
        </div>
        <br /> <br />
        <div className="login-button facebook">
          <FacebookOutlined /> Login with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
