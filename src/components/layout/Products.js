import React, { useContext, Fragment } from "react";
import { Image, List } from "semantic-ui-react";
import navbarStore from "../../app/store/navbarStore";
import { observer } from "mobx-react-lite";

const Products = () => {
  const { products } = useContext(navbarStore);
  const createData = () =>
    products.map((val) => (
      <List.Item>
        <Image
          avatar
          src="https://image.flaticon.com/icons/svg/272/272075.svg"
        />
        <List.Content>
          <List.Header>{val._id}</List.Header>
        </List.Content>
      </List.Item>
    ));
  return (
    <Fragment>
      products
      <List animated verticalAlign="middle">
        {createData()}
      </List>
    </Fragment>
  );
};

export default observer(Products);
