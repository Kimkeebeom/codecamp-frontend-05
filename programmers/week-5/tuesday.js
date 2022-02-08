// 1. 2016년

const month = {
    1 : 31,
    2 : 29,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}
const week = [ "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" ]

function solution(a, b) {
    // 총 일수를 저장하는 변수
    let days = 0;
    
    for( let i = 1; i < a; i++){
        // console.log(i, month[i])
        days += month[i]
    }
    days += (b - 1)
    // console.log(days % 7)
    return week[days % 7]
}

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

function solution(a, b) {
    const answer = new Date(2016, a - 1, b).getDay()
    return week[ answer ]
    // console.log(answer)
}
