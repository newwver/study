# ES6문법(ECMAScript6)

## 1.1. 문법

- const/let
- Arrow functions
- Template Literals
- Default parameters
- Array and object destructing
- Import and export
- Rest parameter and Spread operator

## 1.1.1 const/let

```
const : 변경 불가능한 변수
let : 변경 가능한 변수

* 에러발생
const number = 1;
number = 2;

* 에러없음
let number = 1;
number = 2;

```

## 1.1.2 Arrow functions

```
변경 전
function sample () {
    //
}

변경 후
const sample = () => {
    //
}

```

## 1.1.3 Template Literals

```
변경 전
function sample (age) {
    return '당신의 나이는 ' + age + '살 입니다.';
}

변경 후
const sample = (age) => {
    return  `당신의 나이는 ${age}살 입니다.`;
}

```

## 1.1.4 Default parameters

```
변경 전
function sample (age) {
    return '당신의 나이는 ' + age + '살 입니다.';
}

// 실행
sample();
// 결과
당신의 나이는 살 입니다.

변경 후
const sample = (age = 15) => {
    return  `당신의 나이는 ${age}살 입니다.`;
}

// 실행
sample();
// 결과
당신의 나이는 15살 입니다.

```

## 1.1.5 Array and object destructing

```
변경 전
const props = {
	famillyName: '안',
	name: '세훈',
	age: 42
};

console.log(props.famillyName); // 안
console.log(props.name); // 세훈
console.log(props.age); // 22

변경 후

const props = {
	famillyName: '안',
	name: '세훈',
	age: 42
};

let { famillyName, name, age } = props;

console.log(famillyName); // 안
console.log(name); // 세훈
console.log(age); // 42

```

## 1.1.6 import and export

```
- import
import Button from "../atmos/Button";

- export
export default function sample () {
   //
}
```

## 1.1.7 Rest parameter and Spread operator

```
const handleSample = ({name, age, ...rest}) => {
    // ...rest 안에는 name과 age를 제외한 나머지 값이 들어있음
}

handleSample({
    famillyName : '안',
    name : '세훈',
    age : 22,
    address : '경기도 용인시 기흥구',
    company : '바능'
});
```
