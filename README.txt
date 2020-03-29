cmd => npx create-react-app [tên app: client/ client-app]

API: 
semantic-ui-css
semantic-ui-react

Client <=> axios <=> API

mở project có sẵng zo vs code: code .

extendsion tool : ES7 react

ver 17. react 1 component = function 
ver 16. trở về trc component = class

ver 17 => react hook ( useState, useEffect, useContext )

// useContext dùng store

câu lệnh tắt: rafce

cú pháp {} => jsx : javascript s xml
=> jsx dùng để nhúng vào html

useState: khi component muốn lưu trữ 1 giá trị nào đó thì nó sẽ lưu trong state

state KHÁC props
state: nó là cái component có sẵn
props: tham số người dùng truyền vào

mỗi khi state thay đổi thì component cũng sẽ render lại

store:
 https://insights.innovatube.com/redux-th%E1%BA%ADt-l%C3%A0-%C4%91%C6%A1n-gi%E1%BA%A3n-ph%E1%BA%A7n-1-76a3fa2c31ab

Redux => clear, sang , project lớn
Mobx => dẽ dùng , dễ hiểu, project nhỏ + dừa

Mobx

usestate:state component sẵn có
usecontext: state trong store

// quy tắc mobx:
- component muốn xài thì phải export observer
- nhớ khai báo kiểu cho state (vd: decorate(NavBarStore, {
  count: observable,
  plusCount: action
});)

//promise
.then()
.catch()
.finnally()


axios: dựa trên promise


useEffect : khi component render ra thì nó sẽ chạy zo useEffect