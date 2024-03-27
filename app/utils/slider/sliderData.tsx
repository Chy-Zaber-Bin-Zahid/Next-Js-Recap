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
  const iconSize = 28;

  const data = [
    {
      icon: <HouseSimple size={iconSize} />,
      title: "Overview",
      link: "/companies/overview",
    },
    {
      icon: <Buildings size={iconSize} />,
      title: "Companies",
      link: "/companies/company/?page=1&size=10&query=",
    },
    {
      icon: <Basket size={iconSize} />,
      title: "Products",
      link: "/companies/products",
    },
    {
      icon: <Receipt size={iconSize} />,
      title: "Financial",
      link: "/companies/financial",
    },
    {
      icon: <ClipboardText size={iconSize} />,
      title: "Reports",
      link: "/companies/reports",
    },
    {
      icon: <UserCircle size={iconSize} />,
      title: "Users",
      link: "/companies/users",
    },
    {
      icon: <AddressBook size={iconSize} />,
      title: "Roles",
      link: "/companies/roles",
    },
    {
      icon: <UsersThree size={iconSize} />,
      title: "Team",
      link: "/companies/team",
    },
    {
      icon: <Coins size={iconSize} />,
      title: "Rates",
      link: "/companies/rates",
    },
    {
      icon: <Link size={iconSize} />,
      title: "Technologies",
      link: "/companies/technologies",
    },
  ];



  return data;
}
