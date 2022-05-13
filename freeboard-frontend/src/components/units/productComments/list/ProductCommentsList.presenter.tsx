import ProductCommentsAnswer from '../../productCommentsAnswer/detail/ProductCommentsDetail.contatiner'
import ProductCommentsEdit from '../edit/ProductCommentsEdit.container'

export default function ProductCommentsListUI (props) {
  if (!props.data) return <div />

  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <div key={el._id}>
          <div style={{ color: 'white' }}>{el.contents}</div>
          <button id={el._id} onClick={props.onClickDelete}>
            삭제하기
          </button>
          <ProductCommentsEdit key={el._id} el={el} />
          <ProductCommentsAnswer useditemQuestionId={el._id} />
        </div>
      ))}
    </>
  )
}
