function 함수(x) {
    return x * 2;
}
var john = [1, true];
var john1 = { name: 'kim', name2: 'kim2' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 회원 = 123;
회원 = '123';
var 회원들 = [123, '123', true];
var 회원들들 = { a: '123' };
var 이름름; //unknown 도 있음
이름름 = 123;
이름름 = [];
var 이름1;
function 함수1(x) {
    return x * 2;
} //파라미터와 return값 타입지정가능
function 함수returnX(x) {
    console.log(x);
} //return값이 없을때 void
//함수에 타입 지정된 파라미터있을경우 함수호출시 파라미터값을 넣어줘야함
function 함수2(x) {
    console.log(x + 3);
}
함수2(); //파라미터값이 없어도 에러안남
function 함수3(x) {
    if (typeof x === 'string') {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function 자릿수세기(x) {
    return x.toString().length;
}
function 결혼Test(x, y, z) {
    var yValue = 0;
    var zValue = 0;
    if (y === true) {
        yValue = 500;
    }
    if (z === '상') {
        zValue = 100;
    }
    if (x + yValue + zValue >= 600) {
        return '결혼가능';
    }
}
