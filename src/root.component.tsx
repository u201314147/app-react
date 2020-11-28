import React from "react";
import {
  BrowserRouter as Routes,
  Route,
  Link,
  NavLink,
  BrowserRouter,
} from "react-router-dom";
import AppRouter from "./AppRouter";

export default function Root(props) {
  return (
    <div>
      <BrowserRouter basename="/react">
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}
