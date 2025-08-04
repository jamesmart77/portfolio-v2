import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const isMobile = useBreakpointValue({ base: true, md: false });

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavButton = ({ section, children }) => (
    <Button
      variant={activeSection === section ? "solid" : "ghost"}
      color={activeSection === section ? "white" : "purple.400"}
      colorPalette={activeSection === section ? "purple" : "gray"}
      onClick={() => scrollToSection(section)}
      size="xs"
    >
      {children}
    </Button>
  );

  return (
    <Box bg="gray.900" color="white" minH="100vh" as="header">
      {/* Navigation */}
      <Box
        position="fixed"
        top={0}
        w="100%"
        bg="rgba(26, 32, 44, 0.95)"
        backdropFilter="blur(10px)"
        zIndex={1000}
        borderBottom="1px"
        borderColor="gray.700"
      >
        <Container maxW="7xl" py={4} as="nav">
          <Flex justify="space-between" align="center">
            <Text as="h1" fontSize="xl" fontWeight="bold" color="purple.400">
              James M.
            </Text>
            <HStack gap={4} display={{ base: "none", md: "flex" }}>
              <NavButton section="hero">Home</NavButton>
              <NavButton section="about">About</NavButton>
              <NavButton section="skills">Skills</NavButton>
              <NavButton section="projects">Projects</NavButton>
              <NavButton section="contact">Contact</NavButton>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Fade duration={750} triggerOnce>
        <Hero isMobile={isMobile} scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <Box bg="black" py={8}>
          <Container maxW="7xl" as="footer">
            <Text textAlign="center" color="gray.500">
              © 2025 James Martineau. Built with ❤️ on React & Chakra UI v3.
            </Text>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
}
