import ImageProductWrite from '../../../../commons/upload/imageProduct/imageProduct.container'
import * as S from './ProductWrite.styles'
import { v4 as uuidv4 } from 'uuid'
import { Button, Modal } from 'antd'
import DaumPostcode, { Address } from 'react-daum-postcode'
import { ChangeEventHandler, MouseEvent, MouseEventHandler } from 'react'

interface IProductWriteUI {
  onClickSubmit: MouseEventHandler<HTMLButtonElement>
  onClickUpdateSubmit: MouseEventHandler<HTMLButtonElement>
  addressDetail: any
  onChangeAddressDetail: ChangeEventHandler<HTMLInputElement>
  address: any
  onChangeAddress: ChangeEventHandler<HTMLInputElement>
  showModal: MouseEventHandler<HTMLElement>
  zipcode: any
  onChangeZipcode: ChangeEventHandler<HTMLInputElement>
  onCompleteDaumPostCode: (address: Address) => void
  handleCancel: (e: MouseEvent<HTMLElement, MouseEvent>) => void
  handleOk: (e: MouseEvent<HTMLElement, MouseEvent>) => void
  // eslint-disable-next-line no-undef
  isModalVisible: JSX.Element
  productContents: ChangeEventHandler<HTMLInputElement>
  productPrice: ChangeEventHandler<HTMLInputElement>
  productTitle: ChangeEventHandler<HTMLInputElement>
  data: any
  productWriter: ChangeEventHandler<HTMLInputElement>
  setImages: any
  images: any
  isEdit?: boolean
  isActive: boolean
}

export default function ProductWriteUI (props: IProductWriteUI) {
  // console.log("aaa :",props.images)
  return (
    <S.Wrapper>
      <div style={{ color: 'white' }}>
        {props.isEdit ? '상품 수정' : '상품 등록'}
      </div>
      {/* <p>상품등록</p>
            <form
                onSubmit={
                props.isEdit
                    ? props.handleSubmit(props.onClickEditSubmit)
                    : props.handleSubmit(props.onClickSubmit)
                }
            >
            </form> */}
      {new Array(3).fill(1).map((_, index: any) => (
        <ImageProductWrite
          key={uuidv4()}
          index={index}
          images={props.images}
          setImages={props.setImages}
          // onChangeImages={props.onChangeImages}
        />
      ))}
      <S.Name>
        작성자 :
        <input
          type="text"
          onChange={props.productWriter}
          defaultValue={props.data ? props.data?.fetchUseditem?.name : ''}
        />
      </S.Name>
      <S.Remarks>
        한줄요약 :
        <input
          type="text"
          onChange={props.productTitle}
          defaultValue={props.data ? props.data?.fetchUseditem?.remarks : ''}
        />
      </S.Remarks>
      <S.Price>
        가격 :
        <input
          type="number"
          onChange={props.productPrice}
          defaultValue={props.data ? props.data?.fetchUseditem?.price : ''}
        />
      </S.Price>
      <S.Contents>
        상품상세 :
        <input
          type="textarea"
          onChange={props.productContents}
          defaultValue={props.data ? props.data?.fetchUseditem?.contents : ''}
        />
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
          onChange={props.onChangeZipcode}
          value={
            props.zipcode
              ? props.zipcode
              : props.data?.fetchUseditem?.useditemAddress?.zipcode
          }
        />
        <Button type="primary" onClick={props.showModal}>
          우편번호 검색
        </Button>
        <br />
        <input
          type="text"
          onChange={props.onChangeAddress}
          defaultValue={
            props.address
              ? props.address
              : props.data?.fetchUseditem?.useditemAddress?.address
          }
          readOnly
        />
        <br />
        <input
          type="text"
          placeholder="상세주소 입력"
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.addressDetail
              ? props.addressDetail
              : props.data?.fetchUseditem?.useditemAddress?.addressDetail
          }
        />
      </S.AddressWrapper>
      <S.Button
        onClick={props.isEdit ? props.onClickUpdateSubmit : props.onClickSubmit}
        isActive={props.isActive}
      >
        {props.isEdit ? '상품 수정' : '상품 등록'}
      </S.Button>
    </S.Wrapper>
  )
}
