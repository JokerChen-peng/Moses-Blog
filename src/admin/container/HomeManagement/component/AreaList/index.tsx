
import { Button } from 'antd';
import styled from '@emotion/styled';
import { Schema } from 'common/type';
import { useDispatch, useSelector } from 'react-redux';
import {SortableContainer} from 'react-sortable-hoc'
import { AreaItem } from '../AreaItem';
import { getAddPageChildrenAction,getChangePageChildPositionAction } from 'admin/store/action';
interface SortableListProps{
  list:Schema[]
}
const SortableList = SortableContainer(({list}:SortableListProps) => {
  return (
    <List>
        {list.map((item,index)=>(<AreaItem  key={index} index={index}
        value={index}
        />))}
      </List>
  );
});
 
export const AreaList =()=>{
  const dispatch = useDispatch()
  const children:Schema[] =useSelector((state)=>{
    return (state as any).common.schema?.children||[]
 })
  const addPageChildren =() =>{
    dispatch(getAddPageChildrenAction())
  }
   interface onSortEndProps{
     oldIndex:number;
     newIndex:number;
   }
  const onSortEnd = ({oldIndex,newIndex}:onSortEndProps)=>{
    dispatch(getChangePageChildPositionAction(oldIndex,newIndex))
  }
  return (
    <div>
       <SortableList distance={5} lockAxis='y' list={children} onSortEnd={onSortEnd}/>
      <Button type="primary" ghost onClick={addPageChildren}>新增内容区块</Button>
    </div>
  )
}

const List = styled.ul`
 margin:0;
 padding:0;
 list-style-type:none;
`