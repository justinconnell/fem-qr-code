/* eslint-disable react/prop-types */
import './Card.css';

export function Card({image, imageAlt, description, title}) {
  return (
    <section className="card card--shadow">
      <img className="card__img" src={image} alt={imageAlt}/>
      <h1 className="card__heading">
        {title}
      </h1>
      <p className="card__text">
        {description}
      </p>
    </section>
  );
}