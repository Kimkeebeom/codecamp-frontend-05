export default function ProductCommentsListUI(props){
    if(!props.data) return <div/>
    
    return(
        <>
             {props.data?.fetchUseditemQuestions.map((el)=>(
                <div key={el._id}>
                    <div style={{color:"white"}}>{el.contents}</div>
                </div>
            ))}
        </>
       
        
    )
}