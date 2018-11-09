import React from 'react';
import Slider from 'react-slick';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Img from 'gatsby-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default ({ data }) => (
  <article className="sheet">
    <HelmetDatoCms seo={data.datoCmsEvent.seoMetaTags} />
    <div className="sheet__inner">
      <h1 className="sheet__title">{data.datoCmsEvent.eventTitle}</h1>
      <p className="sheet__lead">{data.datoCmsEvent.eventDate}</p>
    </div>
    <div className="sheet__gallery">
      <Img sizes={data.datoCmsEvent.eventImage.sizes} />
    </div>
  </article>
);

export const query = graphql`
  query EventsQuery($slug: String!) {
    datoCmsEvent(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      eventTitle
      eventImage {
        url
        sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }

              eventDate
              eventLocation {
                latitude
                longitude
              }
      
    }
  }
`;
