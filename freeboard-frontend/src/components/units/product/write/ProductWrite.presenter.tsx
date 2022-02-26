import ImageProductWrite from '../../../../commons/upload/imageProduct/imageProduct.container'
import * as S from './ProductWrite.styles'
import { v4 as uuidv4 } from "uuid"

export default function ProductWriteUI(props){
    // console.log("aaa :",props.images)
    return(
        <S.Wrapper>
            {new Array(3).fill(1).map((_, index: any)=>(
                <ImageProductWrite
                    key={uuidv4()}
                    index={index}
                    images={props.images}
                    setImages={props.setImages}
                    // onChangeImages={props.onChangeImages}
                />
            ))}  
                <S.Name>
                    작성자 : <input type="text" onChange={props.productWriter}/>
                </S.Name>
                <S.Remarks>
                    한줄요약 : <input type="text" onChange={props.productTitle}/>
                </S.Remarks>
                <S.Price>
                    가격 : <input type="number" onChange={props.productPrice}/>
                </S.Price>
                <S.Contents>
                    상품상세 : <input type="textarea" onChange={props.productContents}/> 
                </S.Contents>
                {/* <S.AddressWrapper>
                    주소입력 : <input type="address"/>
                </S.AddressWrapper>
                <S.Tags>
                    태그 : <input type="text" placeholder='#태그 입력' />
                </S.Tags> */}
                <S.Button onClick={props.onClickSubmit}>등록하기</S.Button>
        </S.Wrapper>
    )
}