import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Board {
    
    @PrimaryGeneratedColumn('increment') // 특정 게시물을 만들거나 상품을 만들 때 특정 primary id값이 필요할 떄!
    number!: number // 앞은 컬럼명 뒤에는 타입, 뒤에 느낌표를 붙여주게 되면 얘는 반드시 있을거야라는 의미!

    @Column({ type: "text"})
    writer!: string

    @Column({ type: "text" })
    title!: string

    @Column({ type: "text" })
    age!: number

}