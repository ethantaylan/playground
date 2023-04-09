import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  fetch("https://api.storerestapi.com/products/running-sneaker")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return <h1>hello</h1>;
};
