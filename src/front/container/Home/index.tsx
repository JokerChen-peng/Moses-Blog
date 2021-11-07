
import { Banner } from './component/Banner'
import { BlogList } from './component/Bloglist'
import { Footer } from './component/Footer'
import {parseJsonByString, Wrapper} from 'common/utils'
const listData =parseJsonByString(window.localStorage.homeData,[])
export const Home = () => {
  return (<div>
    <Banner />
    <BlogList></BlogList>
    <Footer />
    {
      listData.map(item=>{
        return <Wrapper>area</Wrapper>
      })
    }
  </div>)
}