import { Banner } from './component/Banner'
import { BlogList } from './component/Bloglist'
import { Footer } from './component/Footer'
export const Home = () => {
  return (<div>
    <Banner />
    <BlogList></BlogList>
    <Footer />
  </div>)
}