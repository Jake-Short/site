/** @jsx jsx */
import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, Text, Divider, Box, Container, Grid, Image, useColorMode } from "theme-ui"
import Tile from "../components/Projects/Tile"

const IndexPage = (props) => {
  const partnersData = props.data.partners.edges;
  const projectsData = props.data.projects.edges;

  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box
      sx={{
        position: "relative",

        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
      }}
    >
      <Helmet title="CVT | Home" />
      <Text
        sx={{
          fontSize: [1, 3],
          maxWidth: ["100%", "90%"],
          my: "4vh",
          p: 4,
          borderTop: '1px solid white',
          borderBottom: '1px solid white'
        }}
      >
        We're the <b>Coronavirus Visualization Team</b>,  a crowdsourced student network of data scientists and analysts, developers, and communicators working to better visualize and share the impacts, present and future, of COVID-19.
      </Text>
      <Container
              sx={{
                position: "relative",
                background: colorMode === "dark" ? "#17171d" : "white",
                m: "8vh 0 0 0",
                width: "100vw",
                minWidth: "100vw"
              }}

      >
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          m: "8vh 0 0 0",
          color: "primary",
          fontSize: [3, 4],
          background: colorMode === "dark" ? "#17171d" : "white"
        }}
      >
        Projects
      </Text>
      </Container>

      <Container
        sx={{
          position: "relative",
          background: colorMode === "dark" ? "#17171d" : "white",
          m: 0,
          width: "100vw",
          minWidth: "100vw",
        }}
      >
        <Container
          sx={{
            maxWidth: "xl",
          }}
        >
          <Grid width={["100%", "45%"]} gap={5} marginTop="8vh" marginRight="2vw" marginLeft="2vw">
            {projectsData.slice(0,4).map((item) => {
              const data = item.node.childMarkdownRemark.frontmatter;
              return (
                <Tile title={data.title} img={data.image} slug={data.slug}/>)
            })}
          </Grid>
        </Container>
      </Container>
      <Link
        sx={{
          width: "100%",
          textAlign: "center",
          mt: '5vh',
          mb: "3vh",
          color: "primary",
          fontSize: [1, 2],
          textDecoration: "none"
        }}
        to="/projects"
      >
        See More &#187;
      </Link>

      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 4,
          color: "primary",
          fontSize: [3, 4]
        }}
      >
        Our Partners
      </Text>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 4,
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: colorMode === "dark" ? "0 0 16px rgba(255, 255, 255, 0.3)" : "none",
          padding: 3
        }}
      >
        {partnersData.map((item) => {
          const data = item.node.childMarkdownRemark.frontmatter;

          console.log(data)

          return (
            <Box
              sx={{
                width: ["45%", "30%"],
                display: "flex",
                justifyContent: "center"
              }}
            >
              <a href={data.website} target="_blank" rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.name}
                  sx={{
                    mb: 3,
                    objectFit: "contain"
                  }}
                />
              </a>
            </Box>
          )
        })}
      </Box>

      <Divider
        sx={{
          my: 2
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            color: "primary",
            fontSize: [3, 4]
          }}
        >
          Join Us
        </Text>

        <Text
          sx={{
            color: "secondary",
            fontSize: [1, 2],
            my: 4,
            maxWidth: ["100%", "65%"]
          }}
        >
          We’re looking for talented and driven individuals and organizations to join our team remotely.
        </Text>

        <Link
          sx={{
            color: "primary",
            fontSize: [1, 2],
            textDecoration: "none"
          }}
          to="/join"
        >
          Learn More &#187;
        </Link>
      </Box>
    </Box>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    partners: allFile(filter: {sourceInstanceName: {eq: "partners"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              image
              website
          }
        }
      }
    }
  },
  projects: allFile(filter: {sourceInstanceName: {eq: "markdown-pages"}} limit: 4) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            title
            slug
            image
        }
      }
    }
  }
},
}`
