import * as P from './ProductCommentsWrite.styles'
import { IProductCommentsWriteUIProps } from './ProductCommentsWrite.types'

export default function ProductCommentsWriteUI(props: IProductCommentsWriteUIProps){
    return(
        <P.Wrapper>
        <P.PencilIcon src='/images/boardComment/pencil.png' />
        <span>댓글</span>
        <P.WrapperContents>
            <P.Contents 
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            value={props.contents} // 댓글을 등록하기 눌렀을 때, 스테이트 부분이 비워져 있으면 기존에 작성했던 값이 비워진다!
            />
            <P.WrapperContentsBottom>
                <P.ContentsLength>{props.contents.length}/100</P.ContentsLength>
                <P.Button onClick={props.onClickRegisComment}>등록하기</P.Button>
            </P.WrapperContentsBottom>
        </P.WrapperContents>
    </P.Wrapper>
    )
}