import React from "react";
import Main from "./components/Product/Container";
import Header from "./components/Header/Header";
import Text from "./components/NavBar/Text";
import css from "../src/App.module.css";

const data = [
  {
    image:
      "https://www.tradeinn.com/f/13787/137870852/apple-macbook-pro-13-m1-8gb-512gb-ssd-%D0%9D%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA.jpg",
    price: "97000р",
    name: "MacBook",
  },
  {
    image: "https://uralcases.ru/wp-content/uploads/2020/11/i12-pro-blue.jpg",
    price: "89999р",
    name: "IPhone",
  },
  {
    image:
      "https://mototeka.su/upload/iblock/bb9/bb9b535db3231bdc9164695ae06fd0eb.jpg",
    price: "58950р",
    name: "Скутер",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzxq16dbwZcLpkPpJHoZ1Ko1ftIbvFlgoww&usqp=CAU",
    price: "12000",
    name: "Монитор Samsung",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFjb9XxlTRuArH3EATWL9cFI0SBvw8SlW2g&usqp=CAU",
    price: "500р",
    name: "Респераторная маска",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByX8rIGGC1YVNrGNhqsoRvK6abGTldyo34w&usqp=CAU",
    price: "75000р",
    name: "Стиральная машина",
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={css.roditel}>
        <Text />
        <div className={css.main__container}>
            <Main image={data[0].image} price={data[0].price} name={data[0].name}/>
            <Main image={data[1].image} price={data[1].price} name={data[1].name}/>
            <Main image={data[2].image} price={data[2].price} name={data[2].name}/>
            <Main image={data[3].image} price={data[3].price} name={data[3].name}/>
            <Main image={data[4].image} price={data[4].price} name={data[4].name}/>
            <Main image={data[5].image} price={data[5].price} name={data[5].name}/>
        </div>
      </div>
    </>
  );
}

export default App;
