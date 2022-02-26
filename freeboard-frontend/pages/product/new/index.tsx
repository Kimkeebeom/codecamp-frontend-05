import ImageProductWrite from "../../../src/commons/upload/imageProduct/imageProduct.container"
import { v4 as uuidv4 } from "uuid"
import ProductWrite from "../../../src/components/units/product/write/ProductWrite.container"

export default function productWrite(){
    return( 
        // {props.images?.map(el: any, index: any) => (
        //     <ImageProductWrite
        //         key={uuidv4()}
        //         index={index}
        //         images={images}    
        //     /> 
        // )}
        <div>
            {/* <ImageProductWrite/> */}
            <ProductWrite/>
        </div>
        
    ) // 일단은 이미지등록페이지만 불러옴
      // 추후에 상품등록페이지 불러와서 넣어줘야함
}