export default function LetHello(){

    
        
    function zzz(){
        document.getElementById("qqq").innerText = "반갑습니다."
    }

    return(
        <div>
            <div id="qqq">안녕하세요</div>
            <button onClick={zzz}>클릭!!</button>
        </div>
    )

}