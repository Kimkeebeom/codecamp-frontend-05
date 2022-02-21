// 1. 시저 암호

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function solution(s, n) {
    let answer = ""
    
    for(let i=0; i<s.length; i++){
        // console.log(s[i])
        if(s[i]===" "){
            answer += s[i] // === answer += " " 공백
            continue; // 아래의 로직을 실행하지 않고 continue 이전의 로직을 계속 실행
        }
        let index = alphabet.indexOf(s[i])
        // console.log(s[i], index, alphabet)
        const word = index > 25 ? alphabet.slice(26, alphabet.lenght) // 대문자
                                : alphabet.slice(0,26) // 소문자
        // console.log(s[i], word)
        index = word.indexOf(s[i]) + n
        
        if(word[index] === undefined){
            // 마지막 알파벳을 넘긴 순간 = 처음으로 되돌아간다.
            index -= 26
        }
        // console.log(s[i], word, index)
        answer += word[index]
    }
    return answer;
}

const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

function solution(s, n) {
    let answer = ""
    
    for(let i=0; i<s.length; i++){
        // console.log(s[i])
        if(s[i]===" "){
            answer += " " // =s[i]
            continue; 
        }
        // s[i]가 소문자라면, 소문자 문자열을 저장하고 아니라면 대문자 문자열을 저장
        const word = lower.includes(s[i]) ? lower : upper
        let index = word.indexOf(s[i]) + n
        
        if(index >= 26){
            index -= 26
        }
        answer += word[index]
    }
    return answer
}

const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

function solution(s, n) {
    const answer = s.split("")
                    .reduce((acc,cur)=>{
                        console.log(acc,cur)
                        if(cur === " "){
                            return acc + " "
                        }
                        const word = lower.includes(cur) ? lower : upper
                        let index = word.indexOf(cur) + n
                        if(index >= 26){
                            index -= 26
                        }
                        return acc + word[index]
                    }, "")
    // console.log(answer)
    return answer
}

// 아스키 코드
// 어떠한 문자를 해당되는 숫자 데이터로 변환
str = "z"
str.charCodeAt()  // 122

// 소문자는 아스키 코드로 변환했을 때 97~122까지 
// 대문자는 아스키 코드로 변환했을 때 65~90까지

String.fromCharCode(90)  // 'Z'

function solution(s, n) {
    let answer = ""
    
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            answer += " "
            continue
        }
        let index = s[i].charCodeAt() + n
        // console.log(index, String.fromCharCode(index))
        if(index > 122 || (index > 90) && (index - n) < 97){
            // 소문자 z(122)를 넘어가거나
            // 대문자 Z(90)를 넘어가면서
            // 기존에 대문자이면서, 소문자 a를 넘지 않을 때
            index -= 26;
        }
        answer += String.fromCharCode(index);
    }
    return answer;
}