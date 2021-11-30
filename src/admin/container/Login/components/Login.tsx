
import { getToken, handleUserResponse,appId,handleUserExpired} from "../utils/authProvider";
import { Button  } from "antd";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthingGuard } from '@authing/react-ui-components'
// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css'
  
export const Login = () => {
  let navigate = useNavigate();
  useEffect(()=>{
     let token =getToken()
     if(token){
      navigate("setting")
     }
  },[navigate])
  const handleSubmit = async (userInfo:any) => {
      console.log(userInfo)
        handleUserResponse(userInfo.token)
        handleUserExpired(userInfo.tokenExpiredAt)
        navigate("setting");
  }
  return (
  <AuthingGuard appId={appId} onLogin={handleSubmit} />
  );
};
