import React from "react";
import {
  HouseSimple,
  Buildings,
  Basket,
  Receipt,
  UserCircle,
  AddressBook,
  ClipboardText,
  UsersThree,
  Coins,
  Link,
} from "@phosphor-icons/react";

export default function sliderData() {
  const data = [
    {
      icon: <HouseSimple size={28} />,
      title: "Overview",
      link: "/companies/houseSimple",
    },
    {
      icon: <Buildings size={28} />,
      title: "Companies",
      link: "/companies/buildings",
    },
    {
      icon: <Basket size={28} />,
      title: "Products",
      link: "/companies/basket",
    },
    {
      icon: <Receipt size={28} />,
      title: "Financial",
      link: "/companies/receipt",
    },
    {
      icon: <ClipboardText size={28} />,
      title: "Reports",
      link: "/companies/clipboardText",
    },
    {
      icon: <UserCircle size={28} />,
      title: "Users",
      link: "/companies/userCircle",
    },
    {
      icon: <AddressBook size={28} />,
      title: "Roles",
      link: "/companies/AddressBook",
    },
    {
      icon: <UsersThree size={28} />,
      title: "Team",
      link: "/companies/UsersThree",
    },
    { icon: <Coins size={28} />, title: "Rates", link: "/companies/coins" },
    {
      icon: <Link size={28} />,
      title: "Technologies",
      link: "/companies/link",
    },
  ];

  return data;
}
