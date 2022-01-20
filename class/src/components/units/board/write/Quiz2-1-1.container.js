import {useRouter} from 'next/router'
import { useState } from 'react'
import RoutingMainUI from './Quiz2-1-1.presenter'

export default function RoutingMain(){
    const [isActive, setIsActive] = useState(false)

    const router = useRouter()

    const onClickMove1 = () => {

        // const result = createProduct
        // console.log(result)

        // const _id = "qwrsadfasdfsda-adfasdfasdfsadf-asdfsdsd"

        // router.push("/05-08-dynamic-routed-product/" + _id)
        router.push("/05-06-dynamic-routed-product/1")
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/2")
    }
    const onClickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/3")
    }
    const onClickMove4 = () => {
        router.push("/05-06-dynamic-routed-board/4")
    }
    const onClickMove100 = () => {
       router.push("/05-06-dynamic-routed-board/100")
    }
    const onChangeColor = () => {
        if (isActive === false) {
          setIsActive(true);
        }
        if (isActive === true) {
          setIsActive(false);
        }
    }


    return(
        <RoutingMainUI
            aaa={onClickMove1}
            bbb={onClickMove2}
            ccc={onClickMove3}
            ddd={onClickMove4}
            eee={onClickMove100}
            fff={onChangeColor}
            isActive={isActive}
        />
    )

}