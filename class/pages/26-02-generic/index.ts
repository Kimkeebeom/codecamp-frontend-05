// 1. 문자 타입
export function getString(arg: string): string {  
    return arg
}
const result1 = getString("철수")
console.log(result1)


// 2. 숫자 타입
export function getNumber(arg: number): number {  
    return 1234 
}
const result2 = getNumber(1991)
console.log(result2)


// 3. any 타입 (그냥 자바스크립트랑 같음)
export function getAny(arg: any): any{
    return arg
}
const myResult31 = getAny("철수")
const myResult32 = getAny(8)
const myResult33 = getAny(true)
console.log(myResult31)
console.log(myResult32)
console.log(myResult33)


// 4. generic 타입(들어온 타입을 그대로 사용)
// <>: <>안에 타입을 적어주게 되면 generic으로 변환 됨
// generic은 타입이 뭔지는 모르겠지만 지정해준 타입으로 쓰겠다는 걸 의미
export function getGeneric<MyType>(arg: MyType): MyType {
    return arg
}
const aaa: string = "철수"
const bbb: number = 8
const ccc: boolean = true
const Result41 = getGeneric(aaa)
const Result42 = getGeneric(bbb)
const Result43 = getGeneric(ccc)
console.log(Result41)
console.log(Result42)
console.log(Result43)


// 5. any 응용!!
// prettier-ignore : 저장할 때 세로로 변환되는걸 방지! 설정을 해줬을 경우에만 적용됨!
export function getAnyReverse(arg1: any, arg2: any, arg3: any): [any, any, any]{
    return [arg3, arg2, arg1]
}
const result5 = getAnyReverse("철수", "다람쥐초등하고", 8)
console.log(result5)


// 6.generic 응용
// prettier-ignore
export function getGenericReverse<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
    return [arg3, arg2, arg1]
}
const result6 = getGenericReverse("철수", "다람쥐초등하고", 8)
console.log(result6)


// 7.generic 응용 - 축약버전1
// prettier-ignore
export function getGenericReverseT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1]
}
const result7 = getGenericReverse("철수", "다람쥐초등하고", 8)
console.log(result7)


// 7.generic 응용 - 축약버전2
// prettier-ignore
export function getGenericReverseTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
    return [arg3, arg2, arg1]
}
const result8 = getGenericReverse("철수", "다람쥐초등하고", 8)
// const result8 = getGenericReverse<string, string, number>("철수", "다람쥐초등하고", 8)
console.log(result8)