import { ChangeEvent } from "react";

export interface IProductCommentsWriteUIProps{
    contents: String;
    onClickRegisComment: (event:React.MouseEvent<HTMLButtonElement>) => void; // onClick함수는 마우스이벤트로 받아온다!
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
