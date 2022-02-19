// 1. 체육복
function solution(n, lost, reserve) {
    const losted = [...lost] // filter 이전의 lost 데이터가 들어있다.
    lost = lost.filter(student => reserve.includes(student) === false)
               .sort((a,b) => a - b) // 오름차순
    reserve = reserve.filter(student => losted.includes(student) === false)
                     .sort((a,b) => a - b) // 오름차순
    // 체육복을 잃어버린 학생들의 수를 뺸 값을 초기값으로 저장
    // (= 체육수업을 들을 수 있는 학생의 수)
    let answer = n - lost.length;
    
    for(let i=0; i<lost.length; i++){
        // console.log(lost[i])
        // 잃어버린 학생의 앞 번호를 조회
        if(reserve.includes(lost[i]-1)){
            // console.log(lost[i]-1, reserve)
            // 인덱스 값으로부터 1개를 지우겠다
            reserve.splice(reserve.indexOf(lost[i]-1),1) 
            answer++
            
        // 잃어버린 학생의 뒷 번호를 조회    
        }else if(reserve.includes(lost[i]+1)){
            reserve.splice(reserve.indexOf(lost[i]+1),1)
            answer++
        }
    }
    return answer;
}

function solution(n, lost, reserve) {
    const losted = [...lost] // filter 이전의 lost 데이터가 들어있다.
    lost = lost.filter(student => reserve.includes(student) === false)
               .sort((a,b) => a - b) // 오름차순
    reserve = reserve.filter(student => losted.includes(student) === false)
                     .sort((a,b) => a - b) // 오름차순
    // 체육복을 잃어버린 학생들의 수를 뺸 값을 초기값으로 저장
    // (= 체육수업을 들을 수 있는 학생의 수)
    let answer = n - lost.length;
    
    lost.forEach(student => {
        // 앞에 있는 학생의 인덱스 값 번호를 가져온다.
        const prev = reserve.indexOf(student-1)
        // 뒤에 있는 학생의 인덱스 값 번호를 가져온다.
        const next = reserve.indexOf(student+1)
        
        // console.log(student, reserve, prev, next)
        if(prev !== -1){
            // 앞에 학생이 있을 경우(여벌복이 있는 학생인 경우)
            answer++
            reserve.splice(prev, 1)
        }else if(next !== -1){
            // 뒤에 학생이 있는 경우(여벌복이 있는 학생인 경우)
            answer++
            reserve.splice(next, 1)
        }
    })
    return answer;
}