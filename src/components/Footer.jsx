/* eslint-disable react/prop-types */

export function Footer({codedBy}) {
  return (
    <footer>
      <section className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>. Coded by <a href="#">{codedBy}</a>.
      </section>
    </footer>
  );
}