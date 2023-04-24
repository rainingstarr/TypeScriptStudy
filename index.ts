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