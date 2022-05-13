import ProductNewUI from './ProductWrite.presenter'
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './ProductWrite.queries'
import { useMutation } from '@apollo/client'
import { IData, IEditProps } from './ProductWrite.types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'

const schema = yup.object().shape({
  name: yup.string().max(100).required('필수입력'),
  price: yup.number().min(1).required('필수입력')
  // contents: yup.string().max(1000).required('필수입력'),
  // remarks: yup.string().max(1000).required('필수입력'),
})

export interface IFormValues {
  name?: string
  remarks?: string
  price?: number
  contents?: string
  title?: string
  images?: string[]
  zipcode?: string
  address?: string
  addressDetail?: string
  email?: string
}

export default function ProductWrite2 (props: IEditProps) {
  const router = useRouter()

  const [images, setImages] = useState(['', '', ''])

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const { register, handleSubmit, formState, setValue } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema)
  })

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...images]
    newFileUrls[index] = fileUrl
    setImages(newFileUrls)
  }

  useEffect(() => {
    if (props.isEdit) {
      setImages(props.data?.fetchUseditem?.images)
      setValue('name', props.data?.fetchUseditem.name)
      setValue('remarks', props.data?.fetchUseditem.remarks)
      // setValue('contents', props.data?.fetchUseditem.contents)
      setValue('price', props.data?.fetchUseditem.price)
      /* setValue('zipcode', props.data?.fetchUseditem?.useditemAddress?.zipcode)
      setValue('address', props.data?.fetchUseditem?.useditemAddress?.address) */
      setValue(
        'addressDetail',
        props.data?.fetchUseditem?.useditemAddress?.addressDetail
      )
      /* setValue('email', props.data?.fetchUseditem.seller.email)
      setValue('name', props.data?.fetchUseditem.seller.name) */
    }
  }, [props.data])

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  )

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  // const [addressDetail, setAddressDetail] = useState('')
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev)
  }

  const onCompleteDaumPostcode = (data) => {
    setAddress(data.address)
    setZipcode(data.zonecode)
    setIsModalVisible((prev) => !prev)
  }

  const onClickSubmit = async (data: IData) => {
    const { name, remarks, price, /* zipcode, address, */ addressDetail } = data
    console.log(images)
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            contents: editorToHtml,
            remarks,
            price: Number(price),
            images,
            useditemAddress: {
              zipcode,
              address,
              addressDetail
            }
          }
        }
      })

      // console.log(result.data?.createUseditem._id)
      router.push(`/product/${result.data?.createUseditem._id}`)
    } catch (error) {
      alert(error.message)
    }
  }

  const onClickEditSubmit = async (data: IData) => {
    const { name, remarks, price, addressDetail } = data
    try {
      await updateUseditem({
        variables: {
          useditemId: props.data?.fetchUseditem._id,
          updateUseditemInput: {
            name,
            remarks,
            contents: editorToHtml,
            price: Number(price),
            images,
            useditemAddress: {
              zipcode,
              address,
              addressDetail
            }
          }
        }
      })
      router.push(`/product/${router.query.productid}`)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ProductDetailUI2
      data={props.data}
      isEdit={props.isEdit}
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickEditSubmit={onClickEditSubmit}
      images={images}
      onChangeFileUrls={onChangeFileUrls}
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      zipcode={zipcode}
      address={address}
      isModalVisible={isModalVisible}
      onToggleModal={onToggleModal}
      onCompleteDaumPostcode={onCompleteDaumPostcode}
    />
  )
}
