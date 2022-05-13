export default function ProductCommentsEditUI (props: any) {
  return (
    <>
      {!props.isEdit && (
        <div>
          <div>{props.contents}</div>
          <button onClick={props.onClickUpdateButton}>수정</button>
        </div>
      )}
      {props.isEdit && (
        <div>
          <div>
            <input
              type="text"
              onChange={props.onChangeContents}
              defaultValue={props.el?.contents}
            />
          </div>
          <button id={props._id} onClick={props.onClickUpdate}>
            등록
          </button>
        </div>
      )}
    </>
  )
}
