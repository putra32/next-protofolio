import Layout from "../components/Layout";
import React from "react";
import axios from "axios";
import HandleError from "./_error";

export default class About extends React.Component {
  static async getInitialProps() {
    const res = await axios.get("https://api.github.com/users/reedbarger");
    const statusCode = res.status > 200 ? res.status : false;
    return { user: res.data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <HandleError />;
    }
    return (
      <Layout title="About">
        <p style={{ textAlign: "center" }}>{user.name}</p>
        <img src={user.avatar_url} alt={user.name} height="200px" />
      </Layout>
    );
  }
}
