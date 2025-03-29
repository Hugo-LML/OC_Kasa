import { FC } from "react";
import Layout from "../components/layout/Layout";
import rentals from "../data/mock.json";
import { Navigate, useParams } from "react-router-dom";
import RentalSlider from "../components/rental/RentalSlider/RentalSlider";
import Star from "../components/icons/Star";
import Accordion from "../components/common/Accordion/Accordion";

const Rental: FC = () => {
  const { rentalId } = useParams();
  const rental = rentals.find(rental => rental.id === rentalId);

  if (!rental) {
    return <Navigate to="/404" />;
  }

  return (
    <Layout id="rental">
      <RentalSlider pictures={rental.pictures} />
      <div className="infos">
        <section className="infos__block1">
          <h1>{rental.title}</h1>
          <h2>{rental.location}</h2>
          <div className="infos__block1__tags">
            {rental.tags.map((tag, index) => (
              <span key={`Tag.${index}`}>{tag}</span>
            ))}
          </div>
        </section>
        <section className="infos__block2">
          <div className="infos__block2__host">
            <h3>{rental.host.name}</h3>
            <div className="infos__block2__host__picture">
              <img src={rental.host.picture} alt={rental.host.name} />
            </div>
          </div>
          <div className="infos__block2__rating">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={`Rating.${index}`} color={`${index < Number(rental.rating) ? "#FF6060" : "#E3E3E3"}`} />
            ))}
          </div>
        </section>
      </div>
      <div className="accordions">
        <Accordion title="Description" content={rental.description} />
        <Accordion title="Équipements" content={rental.equipments} />
      </div>
    </Layout>
  );
};

export default Rental;
