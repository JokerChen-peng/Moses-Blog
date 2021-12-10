
import { useRef, useState } from "react";
import ReactWEditor from "wangeditor-for-react";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
import axios from "axios";
export  function DetailSetting() {
  let editorRef = useRef<any>(null);
  const [id, setId] = useState("");
  const [descObject, setDescObject] = useState("");
  const submit = () => {
    if (editorRef.current && id) {
      setDescObject(editorRef.current.editor.txt.html());
      axios
        .post("/api/detail/save", {
          id,
          descObject: JSON.stringify(descObject)
        })
        .then(() => {});
    }
  };
  return (
    <div>
      <Row>
        <div className="title">页面id</div>
        <div className="content">
          <Input
            value={id}
            placeholder="请输入页面路由id"
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></Input>
        </div>
      </Row>
      <ReactWEditor
        defaultValue={"<h1>标题</h1>"}
        config={{height:800}}
        ref={editorRef}
        linkImgCallback={(src, alt, href) => {
          // 插入网络图片的回调事件
          console.log("图片 src ", src);
          console.log("图片文字说明", alt);
          console.log("跳转链接", href);
        }}
        onlineVideoCallback={(video) => {
          // 插入网络视频的回调事件
          console.log("插入视频内容", video);
        }}
        onChange={(html) => {
          console.log("onChange html:", html);
        }}
        onBlur={(html) => {
          console.log("onBlur html:", html);
        }}
        onFocus={(html) => {
          console.log("onFocus html:", html);
        }}
      />
      <Buttons>
        <Button onClick={submit}>生成详情页</Button>
      </Buttons>
    </div>
  );
}
const Row = styled.div`
  margin-bottom: 20px;
  display: flex;
  .title {
    width: 100px;
    line-height: 32px;
  }
  .content {
    flex: 1;
  }
`;
const Buttons = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px dashed #ccc;
  text-align: center;
`;
