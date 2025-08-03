import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Link,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Card,
} from "@chakra-ui/react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

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

        {/* Contact Section */}
        <Box id="contact" py={20} bg="gray.900">
          <Container maxW="7xl">
            <VStack gap={12}>
              <Heading size="2xl" color="purple.400" textAlign="center">
                Let's Work Together
              </Heading>
              <Text
                fontSize="xl"
                color="gray.300"
                textAlign="center"
                maxW="600px"
              >
                I'm always interested in new opportunities and exciting
                projects. Let's connect and discuss how we can create something
                amazing together.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="100%">
                <Link href="https://github.com/jamesmart77">
                  <Card.Root
                    bg="gray.800"
                    border="1px"
                    borderColor="gray.700"
                    _hover={{
                      borderColor: "purple.400",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    h="100%"
                  >
                    <Card.Body textAlign="center" gap={4}>
                      <Github size={32} color="#9F7AEA" />
                      <Text color="white" fontWeight="medium">
                        GitHub
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        View my code
                      </Text>
                    </Card.Body>
                  </Card.Root>
                </Link>

                <Link href="https://linkedin.com/in/jamesmart77">
                  <Card.Root
                    bg="gray.800"
                    border="1px"
                    borderColor="gray.700"
                    _hover={{
                      borderColor: "red.400",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    h="100%"
                  >
                    <Card.Body textAlign="center" gap={4}>
                      <Linkedin size={32} color="#F56565" />
                      <Text color="white" fontWeight="medium">
                        LinkedIn
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        Connect with me
                      </Text>
                    </Card.Body>
                  </Card.Root>
                </Link>

                <Link href="mailto:contact@jamesmart77.com">
                  <Card.Root
                    bg="gray.800"
                    border="1px"
                    borderColor="gray.700"
                    _hover={{
                      borderColor: "yellow.400",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    h="100%"
                  >
                    <Card.Body textAlign="center" gap={4}>
                      <Mail size={32} color="#ECC94B" />
                      <Text color="white" fontWeight="medium">
                        Email
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        Send a message
                      </Text>
                    </Card.Body>
                  </Card.Root>
                </Link>

                <Link href="/resume.pdf">
                  <Card.Root
                    bg="gray.800"
                    border="1px"
                    borderColor="gray.700"
                    _hover={{
                      borderColor: "purple.400",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.3s"
                    cursor="pointer"
                    h="100%"
                  >
                    <Card.Body textAlign="center" gap={4}>
                      <FileText size={32} color="#9F7AEA" />
                      <Text color="white" fontWeight="medium">
                        Resume
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        Download PDF
                      </Text>
                    </Card.Body>
                  </Card.Root>
                </Link>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

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
