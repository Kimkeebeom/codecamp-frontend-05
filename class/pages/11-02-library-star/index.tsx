import {Rate} from 'antd';
import { useState } from 'react';
// import styled from '@emotion/styled';

// const MyIcon = styled(HeartOutlined)`
//     font-size: 100px;
//     color: #d11b1b;
// `

export default function LibraryIconPage(){
    const [value, setValue] = useState(3)

    const handleChange = (value) => { 
        setValue(value)
    }

    return(<Rate onChange={handleChange} value={value} />)
}