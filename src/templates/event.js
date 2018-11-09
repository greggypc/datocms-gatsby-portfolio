import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default ({ data }) => (
  <article className="sheet">
    <HelmetDatoCms seo={data.datoCmsEvent.seoMetaTags} />
    <div className="sheet__inner">
      <h1 className="sheet__title">{data.datoCmsEvent.eventTitle}</h1>
      <p className="sheet__lead">{data.datoCmsEvent.eventDate}</p>
    </div>
  </article>
);

export const query = graphql`
  query EventQuery($slug: String!) {
    datoCmsEvent(slug: { eq: $slug }) {
      
      eventTitle
              eventDate
              eventLocation {
                latitude
                longitude
              }
      
    }
  }
`;
