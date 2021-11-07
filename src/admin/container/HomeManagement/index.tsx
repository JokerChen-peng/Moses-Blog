
import { useRef, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { AreaList } from './component/AreaList';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined ,
  RollbackOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';
import  PageSetting  from './component/PageSetting';
interface Schema{
  name: string,
  attributes?:Record<string, string|undefined>,
  children?: Schema[]
}
const { Header, Sider, Content } = Layout;
 const useCollapsed =()=>{
  const [collapsed, SetCollapsed] = useState(false);
  const toggleCollapsed = () => {
    SetCollapsed(!collapsed
    );
  };
  return {collapsed,toggleCollapsed}
 }
export const HomeManagement = () => {
  const {collapsed,toggleCollapsed} = useCollapsed()
  const handleHomePageRedirect = ()=>{
    window.location.href='/'
  }
  const pageSettingRef = useRef<{title:string,description:string}>();
  const areaListRef = useRef<{list:unknown[]}>();
  const handleSaveBtnClick = ()=>{
    const schema:Schema={
      name:'Page',
      attributes:{},
      children:[{
        name:'Banner',
        attributes:{
          title:pageSettingRef.current?.title,
          description:pageSettingRef.current?.description
        }
      },{
        name:'Bloglist'
      },
      {
        name:'Footer'
      },
    
     ]
    }
    areaListRef.current?.list.forEach(item=>{
        schema.children?.push({
          name:'Area'
        })
    });
    const schemaStr = JSON.stringify(schema)
    window.localStorage.schema = schemaStr;
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
          <Menu.Item key="admin-home" icon={<HomeOutlined />}>
            首页内容管理
          </Menu.Item>
          <Menu.Item key="admin-back" icon={<RollbackOutlined />}
           onClick={handleHomePageRedirect}
          >
            返回用户页面
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <HeaderMain>
          {collapsed ? <MenuUnfoldOutlined style={{
            color: '#FFF'
          }}
            onClick={toggleCollapsed} /> : <MenuFoldOutlined style={{
              color: '#FFF'
            }} onClick={toggleCollapsed} />
          }
        </HeaderMain>
        <Content
          style={{
            padding: 20,
            minHeight: 1200,
          }}
        >
          <PageSetting ref={pageSettingRef}/>
         <AreaList ref={areaListRef}/>
         <SaveButton>
         <Button type="primary" onClick={handleSaveBtnClick}>保存区块配置</Button>
         </SaveButton>
        </Content>
      </Layout>
    </Layout>
  );

}

const HeaderMain =styled(Header)`
 padding: 0 20px ;
`
const SaveButton =styled.div`
 padding-top: 20px ;
 margin-top: 20px;
 border-top: 1px dashed #ccc;
 text-align:center;
`
