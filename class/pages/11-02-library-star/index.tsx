import {Rate} from 'antd';
import { useState } from 'react';

export default function LibraryIconPage(){
    const [value, setValue] = useState(3) // 별의 초기값

    const handleChange = (value) => { 
        setValue(value) // 위의 value값을 넣어주기 위해 setValue안에 value를 적용!
    }

    return(<Rate onChange={handleChange} value={value} />)
}