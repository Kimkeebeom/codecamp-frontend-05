// 1.문자열 내림차순으로 배치하기
// sort
// 1. 문자 또는 숫자를 오름차순 및 내림차순 순으로 정렬
// 2. 배열에서 사용되는 메소드
// 3. 기본형이 오름차순이다. 글자들만 가지고 정렬 예를 들면 1, 102, 3은 앞 숫자들만 비교하게 된다. 그러므로 컴퓨터는 102를 3보다 작은 숫자로 인식하게 된다

//arr = [ 1, 3, 9, 12, 102, 86 ];
//arr.sort( (a, b) => {
  // return a - b // 오름차순 형태로 정렬하게 해주는 식
  //return a - b
//})
arr = [ 'a', 'b', 'Z', 'A,', 'f', 'z'];
'a' < 'b'
'f' > 'w'
'A' < 'a'
'Z' < 'a'

arr.sort( (a, b) => {
 // return a > b ? -1 : 1 // 내림차순
  return a < b ? -1 : 1
})
arr

function solution(s) {
    const answer = s.split("")
                    .sort((a,b)=>{
                        return a > b ? -1 : 1;
                    }).join("")
    return answer;
}

function solution(s) {
    const answer = [];
    
    for( let i = 0; i < s.lenth; i++ ){
        answer.push( s[i] )
    }
    
    answer.sort( (a, b) => {
        return a > b ? -1 : 1;
    })
    
    let result = "";
    for( let i = 0; i < answer.length; i++){
        result += answer[i];
    }
    return result;
}

// 2.K번째수
function solution(array, commands) {
    const answer = [];
    
    for( let idx = 0; idx < commands.length; idx++ ){
        const i = commands[idx][0];
        const j = commands[idx][1];
        const k = commands[idx][2];
        
        const result = array.slice( i - 1, j )
                            .sort((a,b)=>{
                                // return a - b
                                return a < b ? -1 : 1;
                            })
        answer.push( result[k-1]);
    }
    return answer;
}

function solution(array, commands){
    const answer = commands.map(nums=>{
        const result = array.slice(nums[0] - 1, nums[1])
                            .sort((a,b)=>{
                                return a < b ? -1 : 1;
                            })
        return result[ nums[2] - 1 ];
    })
    console.log(answer)
}