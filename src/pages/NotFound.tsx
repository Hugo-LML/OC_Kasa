import { FC } from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <Layout id="not-found">
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas</h2>
      <Link to="/">
        Retourner sur la page d'accueil
      </Link>
    </Layout>
  );
};

export default NotFound;
