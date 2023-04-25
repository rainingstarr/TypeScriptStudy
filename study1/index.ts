type 내타입 = string | number;



function 함수(x : number) :number{
    return x * 2;
}

type Member = [number,boolean];
let john : Member = [1,true];

type Member1 = {
        [key :string] : string;
}
let john1 : Member1 = {name : 'kim' ,name2 : 'kim2'};

class User{
    name : string;
    constructor(name :string){
        this.name = name;
    }
}

let 회원 :(number | string | boolean) = 123;
회원 = '123';

let 회원들 : (number | string | boolean)[] = [123,'123',true];
let 회원들들 :{a : (number | string | boolean)} = {a : '123'};

let 이름름 :any;//unknown 도 있음
이름름 = 123;
이름름 = [];

let 이름1 :unknown;


function 함수1(x :number) :number {
    return x * 2;
}//파라미터와 return값 타입지정가능

function 함수returnX(x :number) :void {
    console.log(x);
}//return값이 없을때 void
//함수에 타입 지정된 파라미터있을경우 함수호출시 파라미터값을 넣어줘야함

function 함수2(x?:number) :void {
    console.log(x + 3);
}
함수2();//파라미터값이 없어도 에러안남

function 함수3(x?:string) :void {
    if(typeof x === 'string'){
        console.log (`안녕하세요 ${x}`);
    }else{
        console.log ('이름이 없습니다.');
    }
}
function 자릿수세기(x :number|string):number{
    return x.toString().length
}
function 결혼Test(x :number,y :boolean,z :string):string|void{
    let yValue:number = 0;
    let zValue:number = 0;
    if(y === true){yValue = 500;}
    if(z === '상' ){zValue = 100;}
    if(x +yValue + zValue >= 600){
        return '결혼가능';
    }
}

function 내함수(x :number|string){
    let array :number[] = [];
    if(typeof x === 'number'){
        array[0] = x;
    }
}
type AnimalType = string | number | undefined; //타입을 변수화 가능 type alias    타입은 재정의 불가능

type ObjType = {name : string, age : number};

let 동물 :AnimalType;
let 동물들 :ObjType = {name : 'kim', age : 123};

type GirlfrinedType = {
   readonly name : string;
}

const 여친:GirlfrinedType = {
    name : '카리나',
}//readonly는 수정불가능


type PositionXType = { x : number};
type PositionYType = { y : number};

type NewType = PositionXType & PositionYType;

let position :NewType = {x : 1, y : 2};

let 이름 :'kim' = 'kim'; //Literal Type

let 접니다:'대머리' | '솔로';
접니다 = '대머리';

function 함수123(a :'hello'): (1 | 0) {
    return 1;
}
function 가위바위보(a:'가위' | '바위' | '보'):('가위'|'바위'|'보')[] {
    return ['가위','바위']
}

var 자료 ={
    name : 'kim'
} as const // 오브젝트 key 의 value를 type으로 지정 및 모든속성 readonly

function 내함수1(a  :'kim'){

}
내함수1(자료.name);

 type 함수타입 = (a :string) => number;

 let 함수a:함수타입 = function(a){
    return 10
}

type 회원정보타입 ={
    name : string,
    plusOne : (a :number) => number,
    changeName : () => void
}
let 회원정보:회원정보타입={
    name : 'kim',
    plusOne(x){
        return x + 1;
    },
    changeName : () => {
        console.log('안녕')
    }
}

type cutZeroType = (a:string) =>string; 
type removeDashType = (a:string) => number;

let cutZero:cutZeroType = (a) =>{
    if(a.charAt(0) === '0'){
        return a.substring(1);
    }else{
        return a;
    }
}
let removeDash:removeDashType = (a) => {
    return Number(a.replace(/-/g, ""));
}

type cutZeroAndRemoveDashType = (a:string,b:cutZeroType,c:removeDashType) => number
let cutZeroAndRemoveDash:cutZeroAndRemoveDashType = function (a,b,c){
    return c(b(a));
}