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
  Badge,
  Heading,
  Image,
  Separator,
  SimpleGrid,
  IconButton,
  useBreakpointValue,
  Center,
  Card,
} from "@chakra-ui/react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  Users,
  Target,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const isMobile = useBreakpointValue({ base: true, md: false });

  const skillCategories = {
    Frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Vue.js",
      "Angular",
    ],
    Backend: [
      "Node.js",
      "Python",
      "Java",
      "C#",
      "Express",
      "Django",
      "Spring Boot",
    ],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    DevOps: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Kubernetes"],
    Mobile: ["React Native", "Flutter", "iOS", "Android"],
  };

  const softSkills = [
    { name: "Leadership", icon: Users, color: "red.400" },
    { name: "Problem Solving", icon: Target, color: "purple.400" },
    { name: "Communication", icon: MessageCircle, color: "yellow.400" },
    { name: "Innovation", icon: Lightbulb, color: "red.400" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/jamesmart77",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      github: "https://github.com/jamesmart77",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for tracking workouts, nutrition, and progress with social features and gamification.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "https://github.com/jamesmart77",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with natural language processing capabilities, built with Python and deployed using microservices architecture.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "Redis"],
      github: "https://github.com/jamesmart77",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    },
  ];

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

  const SkillIcon = ({ category }) => {
    switch (category) {
      case "Frontend":
        return Globe;
      case "Backend":
        return Code;
      case "Database":
        return Database;
      case "Mobile":
        return Smartphone;
      default:
        return Code;
    }
  };

  return (
    <Box bg="gray.900" color="white" minH="100vh">
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
            <Text fontSize="xl" fontWeight="bold" color="purple.400">
              James M.
            </Text>
            {!isMobile && (
              <HStack gap={4}>
                <NavButton section="hero">Home</NavButton>
                <NavButton section="about">About</NavButton>
                <NavButton section="skills">Skills</NavButton>
                <NavButton section="projects">Projects</NavButton>
                <NavButton section="contact">Contact</NavButton>
              </HStack>
            )}
          </Flex>
        </Container>
      </Box>

      <Hero isMobile={isMobile} scrollToSection={scrollToSection} />

      <About />

      {/* Skills Section */}
      <Box id="skills" py={20} bg="gray.900">
        <Container maxW="7xl">
          <VStack gap={12}>
            <Heading size="2xl" color="purple.400" textAlign="center">
              Skills & Expertise
            </Heading>

            {/* Technical Skills */}
            <Box w="100%">
              <Heading size="lg" color="red.400" mb={8} textAlign="center">
                Technical Skills
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                {Object.entries(skillCategories).map(([category, skills]) => {
                  const IconComponent = SkillIcon({ category });
                  return (
                    <Card.Root
                      key={category}
                      bg="gray.800"
                      border="1px"
                      borderColor="gray.700"
                    >
                      <Card.Body gap={4}>
                        <HStack>
                          <IconComponent color="#9F7AEA" size={24} />
                          <Heading size="md" color="white">
                            {category}
                          </Heading>
                        </HStack>
                        <Flex wrap="wrap" gap={2}>
                          {skills.map((skill) => (
                            <Badge
                              key={skill}
                              colorPalette="purple"
                              variant="subtle"
                              fontSize="sm"
                              px={3}
                              py={1}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </Flex>
                      </Card.Body>
                    </Card.Root>
                  );
                })}
              </SimpleGrid>
            </Box>

            <Separator borderColor="gray.700" />

            {/* Soft Skills */}
            <Box w="100%">
              <Heading size="lg" color="yellow.400" mb={8} textAlign="center">
                Soft Skills
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
                {softSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <VStack key={skill.name} gap={4}>
                      <Box
                        p={4}
                        borderRadius="full"
                        bg="gray.800"
                        border="2px"
                        borderColor={skill.color}
                      >
                        <IconComponent
                          size={32}
                          color={
                            skill.color === "red.400"
                              ? "#F56565"
                              : skill.color === "purple.400"
                              ? "#9F7AEA"
                              : "#ECC94B"
                          }
                        />
                      </Box>
                      <Text
                        color="white"
                        fontWeight="medium"
                        textAlign="center"
                      >
                        {skill.name}
                      </Text>
                    </VStack>
                  );
                })}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" py={20} bg="gray.800">
        <Container maxW="7xl">
          <VStack gap={12}>
            <Heading size="2xl" color="purple.400" textAlign="center">
              Featured Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
              {projects.map((project, index) => (
                <Card.Root
                  key={index}
                  bg="gray.900"
                  border="1px"
                  borderColor="gray.700"
                  overflow="hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    height="250px"
                    objectFit="cover"
                  />
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
                    <IconButton
                      asChild
                      aria-label="View Code"
                      colorPalette="purple"
                      variant="outline"
                      size="sm"
                    >
                      <Link href={project.github}>
                        <Github size={20} />
                      </Link>
                    </IconButton>
                    <IconButton
                      asChild
                      aria-label="Live Demo"
                      colorPalette="red"
                      variant="outline"
                      size="sm"
                    >
                      <Link href={project.demo}>
                        <ExternalLink size={20} />
                      </Link>
                    </IconButton>
                  </Card.Footer>
                </Card.Root>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

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
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can create something amazing
              together.
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
        <Container maxW="7xl">
          <Text textAlign="center" color="gray.500">
            © 2025 James Martineau. Built with React & Chakra UI v3.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;
