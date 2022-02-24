// 1. 실패율
function solution(N, stages) {
    stages.sort((a,b)=>a-b) // 스테이지를 오름차순으로 정렬
    
    const stageArr = [];
    for (let i = 1; i <= N; i++) {
        stageArr.push({
            "stage" : i, // 현재 스테이지의 번호
            "fail" : 0, // 총 실패율 저장
            "users" : 0 // 클리어 하지 못한 유저의 수
        })
    }
    // console.log(stages, stageArr)
    let allUsers = stages.length;
    for(let i=0; i<stages.length; i++){
        if(stageArr[stages[i] - 1]){
            stageArr[stages[i] - 1].users++;
            
            // 현재 스테이지 번호와 다음 스테이지 번호가 동일하지 않을 때
            if( stages[i] !== stages[i + 1]){
                // 실패율 = 머물러 있는 유저수 / 총 유저수 
                const fail = stageArr[stages[i] - 1].users / allUsers
                allUsers -= stageArr[stages[i] - 1].users
                
                stageArr[stages[i] - 1].fail = fail
            }
        }
    }
    
    const answer = stageArr.sort((a,b) => {
        return b.fail - a.fail
    }).map(el=> el.stage)
    return answer
}

// 메서드 이용
function solution(N, stages) {
    stages.sort((a,b)=>a-b) // 스테이지를 오름차순으로 정렬
    
    let allUsers = stages.length
    const answer = new Array(N)
                      .fill(1)
                      .map((el, i) =>{
                        const stage = el + i
                        // console.log(stage, stages)
                        const arr = stages.slice(
                            stages.indexOf(stage),
                            stages.lastIndexOf(stage) + 1
                        )
                        const fail = arr.length / allUsers
                        allUsers -= arr.length
                          
                        return {stage: stage, fail: fail} // {stage, fail}
                      }).sort((a,b) => {
                          return b.fail - a.fail
                      }).map(el => el.stage)
    return answer
}