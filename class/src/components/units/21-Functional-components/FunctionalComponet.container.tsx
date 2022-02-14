import FunctionalComponentUI from "./FunctionalComponet.presenter";

export default function FunctionalComponent(){
    // return <div>{FunctionalComponentUI({count: 100})}</div>
    return <FunctionalComponentUI count={3}/>
}