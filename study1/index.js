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
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
var 동물;
var 동물들 = { name: 'kim', age: 123 };
var 여친 = {
    name: '카리나',
}; //readonly는 수정불가능
var position = { x: 1, y: 2 };
var 이름 = 'kim'; //Literal Type
var 접니다;
접니다 = '대머리';
function 함수123(a) {
    return 1;
}
function 가위바위보(a) {
    return ['가위', '바위'];
}
var 자료 = {
    name: 'kim'
}; // 오브젝트 key 의 value를 type으로 지정 및 모든속성 readonly
function 내함수1(a) {
}
내함수1(자료.name);
var 함수a = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
var cutZero = function (a) {
    if (a.charAt(0) === '0') {
        return a.substring(1);
    }
    else {
        return a;
    }
};
var removeDash = function (a) {
    return Number(a.replace(/-/g, ""));
};
var cutZeroAndRemoveDash = function (a, b, c) {
    return c(b(a));
};
