import {
  Box,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Card,
  Image,
  Flex,
  Badge,
  Button,
  Link,
} from "@chakra-ui/react";
import { Github, ExternalLink } from "lucide-react";
import HangmanImg from "../assets/hangmanLogo.webp";
import JustScriptureImg from "../assets/justScriptureLogo.webp";
import TwoThumbsUpImg from "../assets/twoThumbsUp.webp";

export default function Projects() {
  const projects = [
    {
      title: "JustScripture",
      description:
        "Full-stack server-side rendered Bible app for distraction-free reading with authentication, personalization and AI search.",
      technologies: [
        "Gemini AI",
        "React",
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Auth0",
        "Chakra UI",
        "Vercel",
        "TypeScript",
      ],
      github: "https://github.com/jamesmart77/bible-nextjs",
      demo: "https://justscripture.app",
      image: JustScriptureImg,
      paddingY: "0",
      buttonLabel: "View Application",
    },
    {
      title: "Hangman",
      description:
        "Simple, classic, and fun game built with vanilla JavaScript, HTML, and CSS. Play against the computer with a clean UI.",
      technologies: ["HTML5", "CSS3", "JavaScript", "JQuery"],
      github: "https://github.com/jamesmart77/hangman",
      demo: "https://jamesmart77.github.io/hangman/index.html",
      image: HangmanImg,
      paddingY: "2.5rem",
      buttonLabel: "Play Game",
    },
    {
      title: "Why Hire Me?",
      description:
        "Still wondering why you should hire me? Check this out for a little more insight to my personality ;)",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: null,
      demo: "https://jamesmart77.github.io/jamesPerks/index.html",
      image: TwoThumbsUpImg,
      paddingY: "2.5rem",
      buttonLabel: "See Why",
    },
  ];

  return (
    <Box id="projects" py={20} bg="gray.800">
      <Container maxW="7xl">
        <VStack gap={8}>
          <Heading as="h2" size="2xl" color="purple.400" textAlign="center">
            Featured Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {projects.map((project, index) => (
              <Card.Root
                key={index}
                bg="gray.900"
                border="1px"
                borderColor="gray.700"
                overflow="hidden"
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height="250px"
                    objectFit="contain"
                    paddingY={project.paddingY}
                    borderRadius="50%"
                  />
                </Box>
                <Card.Body gap={4}>
                  <Card.Title color="white">{project.title}</Card.Title>
                  <Card.Description color="gray.300" lineHeight="tall">
                    {project.description}
                  </Card.Description>
                  <Flex wrap="wrap" gap={2}>
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        colorPalette="red"
                        variant="subtle"
                        fontSize="xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Flex>
                </Card.Body>
                <Card.Footer justify="flex-end" gap={4}>
                  {project.github && (
                    <Button
                      as="a"
                      aria-label="View Code"
                      color="purple.400"
                      variant="outline"
                      size="sm"
                      href={project.github}
                    >
                      <Github size={20} />
                      View Code
                    </Button>
                  )}
                  <Button
                    as="a"
                    aria-label="View Demo"
                    backgroundColor="purple.700"
                    variant="solid"
                    size="sm"
                    href={project.demo}
                  >
                    <ExternalLink size={20} />
                    {project.buttonLabel}
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
