import ProductCommentsEdit from "../edit/ProductCommentsEdit.presenter"

export default function ProductCommentsListUI(props){
    if(!props.data) return <div/>
    
    return(
        <>
            {props.data?.fetchUseditemQuestions.map((el)=>(
                <div key={el._id}>
                    <div style={{ color: "white" }}>{el.contents}</div>
                    <button id={el._id} onClick={props.onClickDelete}>삭제하기</button>
                    <ProductCommentsEdit key={el._id} el={el}/>
                </div>
            ))}
        </>
       
        
    )
}