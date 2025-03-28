import { FC } from "react";
import { Link } from "react-router-dom";
import { Rental } from "../../types";

interface HomeCardProps {
  rental: Rental;
}

const HomeCard: FC<HomeCardProps> = ({ rental }) => {
  return (
    <Link to={`/rentals/${rental.id}`} className="home-card">
      <img src={rental.cover} alt={`${rental.title} image cover`} />
      <div className="home-card__mask" aria-hidden />
      <h2>{rental.title}</h2>
    </Link>
  );
};

export default HomeCard;
