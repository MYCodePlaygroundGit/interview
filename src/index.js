import React from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import App from "./components/App";
import Layout from "antd/lib/layout/layout";

ReactDom.render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById("root")
);
