// 1. 폰켓몬
function solution(nums) {
    const answer = []
    
    const limit = nums.length / 2; 
    for(let i = 0; i < nums.length; i++){
        // 중복이 되지 않으면서
        // n/2를 넘지 않을 때만 push
        if(answer.includes(nums[i]) === false 
            && answer.length !== limit
          ){ 
           answer.push(nums[i])
        }
    }
     // console.log(answer)
     return answer.length
 }

 function solution(nums) {
    const answer = new Set([])
    
    nums.forEach(monster => {
         if(nums.length / 2 > answer.size) {
             answer.add(monster)
         }
    })
     // console.log(answer)
     return answer.size
 }

 function solution(nums) {
    const answer = new Set(nums).size // ()안에 nums를 넣어주면 중복값을 없애준다
    // 폰켓몬을 넣을 수 있는 최대수
    const limit = nums.length / 2
    
    if( limit >= answer){
        return answer
    }
    // console.log(answer, limit)
     return limit;
 }