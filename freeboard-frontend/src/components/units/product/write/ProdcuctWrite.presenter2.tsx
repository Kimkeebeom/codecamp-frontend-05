import Button01 from '../../../commons/buttons/01'
import Input01 from '../../../commons/inputs/01'
import * as A from './ProductWrite.styled'
import { withAuth } from '../../../commons/hocs/withAuth'
import { IProductNewUIProps } from './ProductWrite.types'
import { EditorProps } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from 'next/dynamic'
import ImagesUploadForProduct from '../../../commons/image/images01'
import { v4 as uuidv4 } from 'uuid'
import { Modal } from 'antd'
import DaumPostcode from 'react-daum-postcode'

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

// export default function ProductNewUI(props: IProductNewUIProps) {
const ProductDetailUI2 = (props: IProductNewUIProps) => {
  return (
    <A.Wrapper>
      <p>상품등록</p>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickEditSubmit)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <A.InputWrapper>
          <div>상품명</div>
          <div>
            <Input01
              type="text"
              register={props.register('name')}
              maxLength={100}
            />
            <A.ErrorMessage>
              {props.formState?.errors?.name?.message}
            </A.ErrorMessage>
          </div>
        </A.InputWrapper>

        <A.InputWrapper>
          <div>상품가격</div>
          <div>
            <Input01
              type="text"
              register={props.register('price')}
              maxLength={100000}
            />
            <A.ErrorMessage>
              {props.formState.errors.price?.message}
            </A.ErrorMessage>
          </div>
        </A.InputWrapper>

        <A.InputWrapper>
          <div>상품이미지</div>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            {props.isEdit
              ? props.data?.fetchUseditem?.images?.map((el, index) => (
                  <ImagesUploadForProduct
                    data={props.data}
                    images={el}
                    index={index}
                    key={uuidv4}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))
              : props.images?.map((el, index) => (
                  <ImagesUploadForProduct
                    data={props.data}
                    images={el}
                    index={index}
                    key={uuidv4}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
          </div>
          {console.log(props.data?.fetchUseditem?.images)}
        </A.InputWrapper>

        <A.InputWrapper>
          <div>상세설명</div>
          <div>
            <Editor
              editorState={props.editorState}
              defaultEditorState={props.editorState}
              toolbarClassName="toolbar-class"
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              onEditorStateChange={props.onEditorStateChange}
              placeholder="내용을 작성해주세요."
              localization={{
                locale: 'ko',
              }}
              toolbar={{
                options: [
                  'inline',
                  'blockType',
                  'fontSize',
                  'fontFamily',
                  'list',
                  'textAlign',
                  'colorPicker',
                  'link',
                  'embedded',
                  'emoji',
                  'image',
                  'history',
                ],
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  urlEnabled: true,
                  uploadEnabled: true,
                  uploadCallback: true,
                  // uploadCallback: uploadImageCallBack,
                  previewImage: true,
                  alt: { present: false, mandatory: false },
                },
              }}
            />
            {/* <A.ErrorMessage>
              {props.formState.errors.contents?.message}
            </A.ErrorMessage> */}
          </div>
        </A.InputWrapper>

        <A.InputWrapper>
          <div>주소</div>
          <div>
            {/* <Input01
              type="text"
              register={props.register('zipcode')}
              maxLength={100000}
            /> */}
            <A.InputZipcode
              type="text"
              value={
                props.zipcode
                  ? props.zipcode
                  : props.data?.fetchUseditem?.useditemAddress?.zipcode
              }
            />
            <A.SearchAddress type="button" onClick={props.onToggleModal}>
              우편번호 검색
            </A.SearchAddress>
            {props.isModalVisible && (
              <Modal
                title="주소검색"
                visible={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
              >
                <DaumPostcode onComplete={props.onCompleteDaumPostcode} />
              </Modal>
            )}
            <A.InputAddress
              type="text"
              // onChange={props.address}
              defaultValue={
                props.address
                  ? props.address
                  : props.data?.fetchUseditem?.useditemAddress?.address
              }
              readOnly
            />
            <A.InputAddress
              type="text"
              placeholder="상세주소 입력"
              {...props.register('addressDetail')}
              defaultValue={
                props.data?.fetchUseditem?.useditemAddress?.addressDetail
              }
            />
            {/* <Input01
              type="text"
              register={props.register('address')}
              maxLength={100000}
            />
            <Input01
              type="text"
              register={props.register('addressDetail')}
              maxLength={100000}
            /> */}
            <A.ErrorMessage>
              {props.formState.errors.useditemAddress?.address.message}
            </A.ErrorMessage>
          </div>
        </A.InputWrapper>

        {/* <A.InputWrapper>
          <div>판매자</div>
          <div>
            <input
              type="text"
              {...props.register('email')}
              // defaultValue={}
              maxLength={100000}
            />
            <input
              type="text"
              register={props.register('seller.name')}
              maxLength={100000}
            />
          </div>
        </A.InputWrapper> */}

        <A.InputWrapper>
          <div>비고</div>
          <div>
            <Input01
              type="text"
              register={props.register('remarks')}
              maxLength={100000}
            />
          </div>
        </A.InputWrapper>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button01
            name={props.isEdit ? '수정' : '등록'}
            isValid={props.formState.isValid}
          ></Button01>
        </div>
      </form>
    </A.Wrapper>
  )
}

export default withAuth(ProductDetailUI2)
