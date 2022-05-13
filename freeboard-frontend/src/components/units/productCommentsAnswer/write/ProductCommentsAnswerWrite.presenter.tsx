export default function ProductCommentsAnswerWriteUI (props) {
  // if(!props.data) return <div/>
  return (
    <div style={{ color: 'white' }}>
      대댓글{' '}
      <input
        style={{ color: 'black' }}
        type="text"
        onChange={props.onChangeContents}
        value={props.contents}
      />
      <button
        style={{ color: 'black' }}
        onClick={props.onClickRegisCommentAnswer}
      >
        등록
      </button>
    </div>
  )
}
