
import { Banner } from './component/Banner'
import { BlogList } from './component/Bloglist'
import { Footer } from './component/Footer'
import {parseJsonByString, Wrapper} from 'common/utils'
import { Key } from 'react'
const schema =parseJsonByString(window.localStorage.schema,{})
const listData = schema.children.splice(3)
export const Home = () => {
  return (<div>
    <Banner />
    <BlogList></BlogList>
    <Footer />
    {
      listData.map((_: any,i: Key | null | undefined)=>{
        return <Wrapper key={i}>area</Wrapper>
      })
    }
  </div>)
}