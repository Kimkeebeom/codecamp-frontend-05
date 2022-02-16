export default function InputQuizProps(props){
    return <input type={props.type} {...props.register}/>
}