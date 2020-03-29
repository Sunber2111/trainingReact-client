function f1 (a)
{
    return a+1;
}

// normal func

const f1 = a => {
    return a+1;
}

// arrow function

// callback => dùng hàm để làm tham số cho hàm khác
const f2 = func=>{
    func();
}

f2(f1);
// f1 là callback function
