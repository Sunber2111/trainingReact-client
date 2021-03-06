import React, { Fragment, useContext, useEffect } from "react";
import { Menu, Label, Button } from "semantic-ui-react";
import navbarStore from "../../app/store/navbarStore";
import { observer } from "mobx-react-lite";
import axios from 'axios';
import { Link } from "react-router-dom";

const Navbar = ({ listName, rate }) => {
  // const arr = props.listName;
  // const rate = props.rate;
  // console.log(arr);
  // console.log(rate);

  // const { listName, rate } = props;
  // console.log(listName);
  // console.log(rate);

  // foreach => duyệt nhanh nhưng ko làm thay đổi phần tử của mảng
  // map     => duyệt chậm hơn foreach nhưng thay đổi dc dữ liệu
  // console.log('render navbar');

  // const [count,setCount] = useState(0)

  // const [data,setData] = useState({
  //   count:0,
  //   name:""
  // })
  // state : tên là count
  // hàm set lại state => setCount

  // console.log(count);

  const { count, plusCount, fetchData } = useContext(navbarStore);


  const createMenu = () => {
    const arr = [];
    listName.map(item => arr.push(<Menu.Item>{item}</Menu.Item>));
    return arr;
  };

  const handleClick = e => {
    plusCount();
  };

  

  return (
    <Fragment>
      <Button
        basic
        color="red"
        content="Click me"
        onClick={handleClick}
      />
      <Link to='/products'>products</Link>
      <Button
        as={Link}
        to='/products'
        basic
        color="teal"
        content="Fetch Data"
        onClick={fetchData}
      />
      <Label as="a" image>
        {count}
      </Label>
      <Menu>{createMenu}</Menu>
    </Fragment>
  );
};

export default observer(Navbar);
