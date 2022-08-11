import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function WhyHero(props) {
  return (
    <Section>
      <Container>
        <SuperHeading className={styles.whyHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text && <Text className={styles.whyHeroText}>{props.text}</Text>}
      </Container>
      <Container width="wide">
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.whyHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment WhyHeroContent on WhyHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
