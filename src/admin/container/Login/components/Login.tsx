
import { getToken, handleUserResponse, login } from "../utils/authProvider";
import { Alert, Button, Form, Input } from "antd";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
  
export const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [error, SetError] =useState(false)
  const [errorMeg, SetErrorMeg] =useState('')
  let navigate = useNavigate();
  useEffect(()=>{
     let token =getToken()
     if(token){
      navigate("setting")
     }
  },[navigate])
  const handleSubmit = async ({username,password}:any) => {
    const data = await login({username,password})
      if(data.success){
        handleUserResponse(data?.data?.token)
        navigate("setting");
      }else{
        SetError(true)
        console.log(data.message)
        SetErrorMeg(data?.message)
      }
    
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      </Form.Item>
      <Form.Item>
        <LongButton  htmlType={"submit"} type={"primary"}>
          登录
        </LongButton>
      </Form.Item>
      {error&&<Alert message={errorMeg}  type="error"
      closable/>}
    </Form>
  );
};
const LongButton = styled(Button)`
  width: 100%;
`;