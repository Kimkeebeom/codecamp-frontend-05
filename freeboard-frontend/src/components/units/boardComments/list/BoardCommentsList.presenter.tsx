import { IQuery } from '../../../../commons/types/generated/types'
import { ChangeEvent, MouseEvent } from 'react'
import BoardCommentListEditUI from './BoardCommentList.presenterEdit'
import InfiniteScroll from 'react-infinite-scroller'

export default function BoardCommentsListUI(props){
    if(!props.data) return <div/>
    
    return( 
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el: { _id: any }) => (
            <BoardCommentListEditUI key={el._id} el={el} />
        ))}
        </InfiniteScroll>    
    )
}