import styled from "@emotion/styled";
export const parseJsonByString =(str:string,defaultValue:unknown[])=>{
  let  returnValue = defaultValue;
  try{
    returnValue = JSON.parse(str)
  }catch(e){
  }
  return returnValue
}

export const Wrapper =styled.div`
 width:1280px;
 background:#FFF;
 margin: 0 auto 15px auto;
`
