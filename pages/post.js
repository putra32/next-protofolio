import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque saepe
      hic ullam dolores deleniti excepturi, provident recusandae ex error
      explicabo sed omnis, pariatur molestiae temporibus. Velit mollitia tempora
      tenetur.
    </p>
  </Layout>
);

export default withRouter(Post);
