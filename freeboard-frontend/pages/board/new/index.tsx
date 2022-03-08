import { ChangeEvent } from 'react'
import BoardWrite from '../../../src/components/units/board/write/BoardWrite.container'

//등록(New) 페이지
export default function NewBoardWrite() {
    return <BoardWrite isEdit={false} onChangeYoutubeUrl={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
    } } isActive={false} onChangeFileUrls={function (fileUrls: string, index: number): void {
        throw new Error('Function not implemented.')
    } } fileUrls={[]}/>
}