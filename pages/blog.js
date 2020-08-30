import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ titlePost, slug }) => (
  <li>
    <Link as={slug} href={`/post/?title=${titlePost}`}>
      <a>{titlePost}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" titlePost="React Post" />
      <PostLink slug="angular-post" titlePost="Angular Post" />
      <PostLink slug="vue-post" titlePost="Vue Post" />
    </ul>
  </Layout>
);

export default Blog;
