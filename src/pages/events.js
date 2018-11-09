import React from 'react';
import Link from 'gatsby-link';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';

const EventPage = ({ data }) => (
  <Masonry className="showcase">
    {data.allDatoCmsEvent.edges.map(({ node: event }) => (
      <div key={event.id} className="showcase__item">
        <figure className="card">
          <Link to={`/events/${event.slug}`} className="card__image">
            <Img sizes={event.coverImage.sizes} />
          </Link>
          <figcaption className="card__caption">
            <h6 className="card__title">
              <Link to={`/events/${event.slug}`}>{event.eventTitle}</Link>
            </h6>
            <div className="card__description">
              <p>{event.eventDate}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    ))}
  </Masonry>
);

export default IndexPage;

export const query = graphql`
  query EventQuery {
    allDatoCmsEvent(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          eventTitle
              eventDate
              eventLocation {
                latitude
                longitude
              }
          }
        }
      }
    }
  
`;
