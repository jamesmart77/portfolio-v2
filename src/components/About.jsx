import { useState } from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Link,
  Heading,
  Image,
  SimpleGrid,
  IconButton,
  Center,
  Button,
} from "@chakra-ui/react";
import { Tooltip } from "./chakra-snippets/tooltip.jsx";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ChevronUp,
  Download,
} from "lucide-react";
import HeadshotImg from "../assets/headshot.webp";
import Resume from "../assets/JamesMartineau_Resume.pdf";
import { Fade } from "react-awesome-reveal";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const hoverStyles = {
    textDecoration: "none",
    backgroundColor: "purple.800",
    color: "white",
    borderColor: "purple.800",
  };

  return (
    <Box id="about" py={20} bg="gray.800">
      <Container maxW="7xl">
        <VStack gap={8}>
          <Heading as="h2" size="2xl" color="purple.400" textAlign="center">
            About Me
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            <VStack gap={6} align="flex-start">
              <Text fontSize="lg" color="gray.200" lineHeight="tall" as="div">
                <Text>
                  I'm a passionate full-stack developer and solutions engineer
                  with a foundation in business and a drive for solving
                  real-world problems with tech. After earning my B.S. in
                  Business Administration from the University of New
                  Hampshire—with concentrations in Information Systems
                  Management and Management—I started my career as a Project
                  Analyst, where I quickly found myself automating workflows and
                  scaling homegrown tools.
                </Text>
                <Text mt={4}>
                  {showMore
                    ? `Encouraged by my manager to pursue development full-time, I
                  enrolled in UNH's Full Stack Web Development Boot Camp. That
                  leap sparked a deep passion for software engineering—a perfect
                  blend of problem solving, creativity, and collaboration.`
                    : `Encouraged by my manager to pursue development full-time, I
                  enrolled in UNH's Full Stack Web Development Boot Camp. That
                  leap sparked a deep passion...`}
                </Text>
              </Text>
              {showMore && (
                <Fade triggerOnce duration={500} direction="bottom">
                  <Text fontSize="lg" color="gray.200" lineHeight="tall">
                    I thrive in environments where I can bridge business needs
                    with technical solutions so that valuable impacts are made.
                    Remaining level-headed and active listening are my
                    strengths.
                  </Text>
                  <Text fontSize="lg" color="gray.200" lineHeight="tall">
                    Outside of work, I enjoy life on the Seacoast of New
                    Hampshire with my family, and our dog. We love hiking,
                    reading, spending time with friends, and giving back to our
                    community.
                  </Text>
                  <Text fontSize="lg" color="gray.200" lineHeight="tall">
                    Let's connect on{" "}
                    <Link
                      variant="underline"
                      href="https://linkedin.com/in/jamesrmartineau"
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight="bold"
                      color="purple.400"
                    >
                      LinkedIn
                    </Link>{" "}
                    or shoot me an email — I'm always up for learning about
                    interesting projects or new opportunities.
                  </Text>
                </Fade>
              )}
              <Button
                color="purple.400"
                variant="ghost"
                onClick={() => setShowMore(!showMore)}
                paddingX={0}
                _hover={{
                  backgroundColor: "transparent",
                  color: "purple.300",
                }}
              >
                {showMore ? "Read Less" : "Read More"}
                {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
              <HStack gap={4} display={{ base: "flex" }} flexWrap="wrap">
                <Tooltip content="Check out my GitHub" openDelay={250}>
                  <IconButton
                    asChild
                    aria-label="GitHub"
                    color="purple.400"
                    variant="outline"
                    size="lg"
                    _hover={hoverStyles}
                  >
                    <Link href="https://github.com/jamesmart77">
                      <Github size={24} />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip content="Connect on LinkedIn" openDelay={250}>
                  <IconButton
                    asChild
                    aria-label="LinkedIn"
                    color="purple.400"
                    variant="outline"
                    size="lg"
                    _hover={hoverStyles}
                  >
                    <Link href="https://linkedin.com/in/jamesrmartineau">
                      <Linkedin size={24} />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Button
                  as="a"
                  aria-label="Email"
                  color="purple.400"
                  variant="outline"
                  size="lg"
                  href="mailto:jamesmart77@gmail.com"
                  _hover={hoverStyles}
                >
                  <Mail size={24} />
                  Email me
                </Button>
                <Button
                  as="a"
                  aria-label="Resume"
                  color="purple.400"
                  variant="outline"
                  size="lg"
                  href={Resume}
                  _hover={hoverStyles}
                  download="JamesMartineau_Resume.pdf"
                >
                  <Download size={24} />
                  Resume
                </Button>
              </HStack>
            </VStack>
            <Center>
              <Image
                src={HeadshotImg}
                alt="James Martineau"
                borderRadius="xl"
                shadow="2xl"
                border="4px"
                borderColor="purple.400"
                maxW="400px"
              />
            </Center>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
