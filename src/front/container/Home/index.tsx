import { Schema } from 'common/type'
import {parseJsonByString} from 'common/utils'
import { Helmet,HelmetProvider } from 'react-helmet-async'
import { Banner } from './component/Banner'
import {Footer} from './component/Footer'
import { BlogList } from './component/Bloglist'
const pageSchema:Schema= parseJsonByString(window.localStorage.schema,{})
const {children=[],attributes={}} = pageSchema
const render =(item: Schema,index: number)=>{
  switch(item.name){
    case 'Banner':
      return <Banner key={index} schema={item}/>
    case 'Footer':
      return <Footer key={index} schema={item}/>
    case 'List':
      return <BlogList key={index} schema={item}/>
    default:
      return null;
  }
}
export const Home = () => {

  return (<HelmetProvider>
    <Helmet>
      <title>{attributes?.title||''}</title>
    </Helmet>
    {
      children.map((item,index)=>{
        return render(item,index)
      })
    }
  </HelmetProvider>)
}