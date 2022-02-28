import ProductCommentsEdit from "../edit/ProductCommentsAnswerEdit.container";

export default function ProductCommentsAnswerList(props){

    return(
        <>
            <ProductCommentsEdit
            el={props.el}
            onClickDelete={props.onClickDelete}
        />
        </>
        
    )
}