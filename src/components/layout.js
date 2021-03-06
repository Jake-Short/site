/** @jsx jsx */
import { useState } from "react"
import {
  Container,
  Box,
  NavLink,
  Divider,
  jsx,
  Image,
  Text,
  Input,
  Button,
  useColorMode
} from "theme-ui"
import { Link } from "gatsby"
import favicon from "../../static/assets/favicon.ico"
import Logo from "./cvtlogo.svg"
import { Helmet } from "react-helmet"
import TwitterLogo from "./social-icons/Twitter.png"
import InstagramLogo from "./social-icons/Instagram.png"
import MailLogo from "./social-icons/Mail.png"
import GithubLogo from "./social-icons/GitHub.png"
import MediumLogo from "./social-icons/Medium.png"
import LinkedInLogo from "./social-icons/LinkedIn.png"

import Sun from "../icons/sun.png";
import Moon from "../icons/moon.png";

export const Header = () => {
  const [show, toggleShow] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  
  return(
    <Box
      as="header"
      sx={{
        display: "flex",
        alignItems: "center",
        py: 4,
        height: '16vh',
        "a+a": { ml: [4] },
        zIndex: 10,
        position: "relative",
      }}
    >
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Link to="/">
        <Image
          sx={{
            width: ["6em", "10em"],
            height: "auto",
          }}
          src={Logo}
        />
      </Link>
      <Box sx={{ mx: "auto" }} />
      <div sx = {{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        '@media screen and (max-width: 800px)': {
          display: 'none'
        }
      }}>
        <Link to="/projects">
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="/visualizations">
          <NavLink>Visualizations</NavLink>
        </Link>
        <Link to="/team">
          <NavLink>Our Team</NavLink>
        </Link>
        <Link to="/join">
          <NavLink>Join Us</NavLink>
        </Link>
        <Link to="/resources">
          <NavLink>Resources</NavLink>
        </Link>
        <Box sx={{
          width: '35px',
          height: '35px',

          borderRadius: '50%',
          border: 'solid 2px transparent',

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          cursor: "pointer",

          ml: '32px',

          transition: "ease-in-out 0.12s",

          '&:hover': {border: 'solid 2px white'},
        }}
        onClick={() => setColorMode(colorMode === "dark" ? "default" : "dark")}>
          <Image
            sx={{
              width: "60%",
              height: "auto",
            }}
            src={colorMode === "dark" ? Moon : Sun}
          />
        </Box>
      </div>
      <div sx={{display: 'none',
                '@media screen and (max-width: 800px)': {
                  display: 'flex'
                },
                transform: show ? 'translateX(-50vw)' : null,
                transition: 'all 0.2s cubic-bezier(.25, .8, .25, 1)',
                '&:hover': {cursor: 'pointer'},
                width: '25px',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'end'
              }}
            onClick={() => toggleShow(!show)}>
        <p sx={{borderRadius: '10px',
                height: '2px',
                width: '25px',
                backgroundColor: 'white',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(9px) rotate(-45deg)' : null}}></p>
        <p sx={{borderRadius: '10px',
                height: '2px',
                width: show ? '25px' : '15px',
                backgroundColor: 'white',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(1px) rotate(45deg)': null}}></p>
          <p sx={{borderRadius: '10px',
                height: '2px',
                width: show ? '25px' : '20px',
                backgroundColor: 'white',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(-8px) rotate(45deg)' : null}}></p>
      </div>

      <div sx={{
                position: 'fixed',
                top: 0,
                height: '100%',
                maxHeight: '100vh',
                paddingTop: '30px',
                width: '50vw',
                right: show ? '0' : 'calc(-50vw)',
                background: 'gradient',
                boxShadow: 'base',
                transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
                color: 'black'}}>
        <div sx = {{
          display: 'flex',
          flexDirection: 'column'
        }} >
        <Link to="/projects" >
          <NavLink onClick={() => toggleShow(!show)} sx = {{marginLeft: '32px', mb: 2}}>Projects</NavLink>
        </Link>
        <Link to="/visualizations">
          <NavLink onClick={() => toggleShow(!show)} sx={{mb: 2}}>Visualizations</NavLink>
        </Link>
        <Link to="/team">
          <NavLink onClick={() => toggleShow(!show)} sx={{mb: 2}}>Our Team</NavLink>
        </Link>
        <Link to="/join">
          <NavLink onClick={() => toggleShow(!show)} sx={{mb: 2}}>Join Us</NavLink>
        </Link>
        <Link to="/resources">
          <NavLink onClick={() => toggleShow(!show)} sx={{mb: 2}}>Resources</NavLink>
        </Link>
        <Box sx={{
          width: '35px',
          height: '35px',

          borderRadius: '50%',
          border: 'solid 2px transparent',

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          cursor: "pointer",

          transition: "ease-in-out 0.12s",

          ml: '32px',

          '&:hover': {border: 'solid 2px white'},
        }}
        onClick={() => setColorMode(colorMode === "dark" ? "default" : "dark")}>
          <Image
            sx={{
              width: "60%",
              height: "auto",
            }}
            src={colorMode === "dark" ? Moon : Sun}
          />
        </Box>
      </div>


      </div>
    </Box>
  )
}

export const NavBackground = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        background: "gradient",
        width: "100%",
        minWidth: "100%",
        height: "65vh",
      }}
    ></Container>
  )
}

export const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
  <Box
    as="footer"
    sx={{
      display: "flex",
      flexDirection: "column",
      py: 4,
      mt: 4,
      "a+a": { ml: [3, 4] },
      zIndex: 10,
      position: "relative",
    }}
  >
    <Divider
      sx={{
        mb: 4,
      }}
    />

    <Text
      sx={{
        fontSize: [2, 3],
        color: "primary",
      }}
    >
      Stay Updated
    </Text>

    <Box
      as="form"
      action="https://harvard.us19.list-manage.com/subscribe/post"
      method="POST"
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        alignItems: [null, "center"],
        justifyContent: ["center", null],
        py: 4,
      }}
    >
      {/** Mailchimp Identifiers */}
      <Input type="hidden" name="u" value="296f4b87de1255e43330d3eed" />
      <Input type="hidden" name="id" value="fd200b5e7b" />

      <Input
        placeholder="First Name"
        name="MERGE1"
        id="MERGE1"
        sx={{
          color: "secondary",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2",
        }}
      />

      <Input
        placeholder="Last Name"
        name="MERGE2"
        id="MERGE2"
        sx={{
          color: "secondary",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2",
        }}
      />

      <Input
        placeholder="Email"
        name="MERGE0"
        id="MERGE0"
        sx={{
          color: "secondary",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2",
        }}
      />

      <Button
        type="submit"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "#168CA6",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
        }}
      >
        Subscribe
      </Button>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column"],
          alignItems: ["center", "flex-start"],
        }}
      >
        <Image
          sx={{
            // vvv To turn logo black
            filter: `${colorMode === 'default' ? 'invert(100%)' : 'invert(0%)'}`,
            maxWidth: 200,
          }}
          src={Logo}
        />

        <Text
          sx={{
            fontSize: [1, 2],
            color: "secondary",
          }}
        >
          Coronavirus Visualization Team
        </Text>

        <Link
          to="/privacy"
          sx={{
            fontSize: [0, 1],
            color: "tertiary",
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: ["row"],
          flexWrap: "wrap",
          justifyContent: ["center", null],
          alignItems: [null, "center"],
          ml: [null, "auto"],
          pt: [4, 0],
          maxWidth: [null, "300px"],
        }}
      >
        <SocialIcon
          link="https://instagram.com/joincvt"
          image={InstagramLogo}
        />
        <SocialIcon link="https://twitter.com/joincvt" image={TwitterLogo} />
        <SocialIcon
          link="mailto:coronavirusvisualizationteam@gmail.com"
          image={MailLogo}
        />
        <SocialIcon
          link="https://linkedin.com/company/coronavirus-visualization-team"
          image={LinkedInLogo}
        />
        <SocialIcon
          link="https://medium.com/coronavirus-visualization-team"
          image={MediumLogo}
        />
        <SocialIcon
          link="https://github.com/Coronavirus-Visualization-Team"
          image={GithubLogo}
        />
      </Box>
    </Box>
  </Box>
)}

// Social icons for us in footer
const SocialIcon = props => {
  return (
    <Button
      as="a"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: "#168CA6",
        borderRadius: "button",
        boxShadow: "base",
        width: 60,
        height: 60,
        p: "1.05em",
        ml: [2, 4],
        mr: [2, null],
        my: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={props.image} />
    </Button>
  )
}

export default ({ children }) => (
  <Container sx={{ maxWidth: "xl", margin: "auto", px: 3 }}>
    <Header />
    <NavBackground />
    {children}
    <Footer />
  </Container>
)
