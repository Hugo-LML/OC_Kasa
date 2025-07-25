import { FC } from "react";
import Layout from "../components/layout/Layout";
import Accordion from "../components/common/accordion/Accordion";

const accordionsData = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: "Responsabilité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const About: FC = () => {
  return (
    <Layout id="about">
      <div className="hero">
        <img src="/assets/images/about_bg.png" alt="about background image" />
        <div className="hero__mask" aria-hidden />
      </div>
      <section>
        {accordionsData.map((accordion, index) => (
          <Accordion key={`AboutAccordion.${index}`} title={accordion.title} content={accordion.content} />
        ))}
      </section>
    </Layout>
  );
};

export default About;
