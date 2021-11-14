import { Schema } from 'common/type'
import {parseJsonByString} from 'common/utils'
import { Banner } from './component/Banner'
import {Footer} from './component/Footer'
import { BlogList } from './component/Bloglist'
const pageSchema = parseJsonByString(window.localStorage.schema,{})
const children:Schema[] = pageSchema.children || [];
const render =(item: Schema,index: number)=>{
  switch(item.name){
    case 'Banner':
      return <Banner key={index} schema={item}/>
    case 'Footer':
      return <Footer key={index} />
    case 'List':
      return <BlogList key={index} schema={item}/>
    default:
      return null;
  }
}
export const Home = () => {

  return (<div>
    {
      children.map((item,index)=>{
        return render(item,index)
      })
    }
  </div>)
}