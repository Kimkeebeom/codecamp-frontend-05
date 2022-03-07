import ImageProductWrite from '../../../../commons/upload/imageProduct/imageProduct.container'
import * as S from './ProductWrite.styles'
import { v4 as uuidv4 } from "uuid"
import { Button, Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'

export default function ProductWriteUI(props){
    // console.log("aaa :",props.images)
    return(
        <S.Wrapper>
            {/* <p>상품등록</p>
            <form
                onSubmit={
                props.isEdit
                    ? props.handleSubmit(props.onClickEditSubmit)
                    : props.handleSubmit(props.onClickSubmit)
                }
            >
            </form> */}
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
                {props.isModalVisible && (
                    <Modal
                    title="주소 검색"
                    visible={true}
                    onOk={props.handleOk}
                    onCancel={props.handleCancel}
                    >
                    <DaumPostcode onComplete={props.onCompleteDaumPostCode} />
                    </Modal>
                )}
                    <S.AddressWrapper>
                        <div>주소</div>
                        <input
                            type="text"
                            value={
                            props.zipcode
                                ? props.zipcode
                                : props.data?.fetchUseditem?.useditemAddress?.zipcode
                            }
                        />
                        <Button type="primary" onClick={props.showModal}>우편번호 검색</Button>
                        <br/>
                        <input 
                             type="text"
                             defaultValue={
                             props.address
                                 ? props.address
                                 : props.data?.fetchUseditem?.useditemAddress?.address
                             }
                             readOnly
                        /><br/>
                        <input 
                            type="text"
                            placeholder="상세주소 입력"
                            onChange={props.onChangeAddressDetail}
                            defaultValue={
                            props.data?.fetchUseditem?.useditemAddress?.addressDetail
                            }
                        />
                    </S.AddressWrapper>
                <S.Button 
                    onClick={props.isEdit ? props.onClickUpdateSubmit : props.onClickSubmit} 
                    isActive={props.isActive}
                >
                    {props.isEdit ? "상품 수정" : "상품 등록"} 
                </S.Button>            
        </S.Wrapper>
    )
}