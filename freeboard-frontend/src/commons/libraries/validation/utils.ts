import { Modal } from "antd"

export const checkFileValidation = (file?: File) => {

    if(!file?.size){ // !file?.size: 파일 사이즈가 없을 때 튕겨내기!
        Modal.error({content: "파일이 존재하지 않습니다"})
        return false // 하나의 에러라도 있으면 return false로 되돌려주기
    }

    if(file.size > 5 * 1024 * 1024 * 1024){
        Modal.error({content:"파일 용량이 큽니다.(제한: 50MB)"})
        return false
    }

    // if(!file.type.includes("jpeg") && !file.type.includes("png")){
    //     Modal.error({content:"jpeg 파일 또는 png 파일만 업로드 가능합니다."})
    //     return false
    // }

    return true
}