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
} from "@chakra-ui/react";
import { Tooltip } from "./chakra-snippets/tooltip.jsx";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function About() {
  return (
    <Box id="about" py={20} bg="gray.800">
      <Container maxW="7xl">
        <VStack gap={12}>
          <Heading size="2xl" color="purple.400" textAlign="center">
            About Me
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            <VStack gap={6} align="flex-start">
              <Text fontSize="lg" color="gray.200" lineHeight="tall">
                I'm a passionate full-stack developer and solutions engineer
                with a foundation in business and a drive for solving real-world
                problems with tech. After earning my B.S. in Business
                Administration from the University of New Hampshire—with
                concentrations in Information Systems Management and
                Management—I started my career as a Project Analyst, where I
                quickly found myself automating workflows and scaling homegrown
                tools.
              </Text>
              <Text fontSize="lg" color="gray.200" lineHeight="tall">
                Encouraged by my manager to pursue development full-time, I
                enrolled in UNH's Full Stack Web Development Boot Camp. That
                leap sparked a deep passion for software engineering—a perfect
                blend of problem solving, creativity, and collaboration.
              </Text>
              <Text fontSize="lg" color="gray.200" lineHeight="tall">
                I thrive in environments where I can bridge business needs with
                technical solutions so that valuable impacts are made. Remaining
                level-headed and active listening are my strengths.
              </Text>
              <Text fontSize="lg" color="gray.200" lineHeight="tall">
                Outside of work, I enjoy life on the Seacoast of New Hampshire
                with my family, and our dog. We love hiking, reading, spending
                time with friends, and giving back to our community.
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
              <HStack gap={4}>
                <Tooltip content="Check out my GitHub" openDelay={250}>
                  <IconButton
                    asChild
                    aria-label="GitHub"
                    color="purple.400"
                    variant="outline"
                    size="lg"
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
                  >
                    <Link href="https://linkedin.com/in/jamesrmartineau">
                      <Linkedin size={24} />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip content="Send me an email" openDelay={250}>
                  <IconButton
                    asChild
                    aria-label="Email"
                    color="purple.400"
                    variant="outline"
                    size="lg"
                  >
                    <Link href="mailto:jamesmart77@gmail.com">
                      <Mail size={24} />
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip content="Download my resume" openDelay={250}>
                  <IconButton
                    asChild
                    aria-label="Resume"
                    color="purple.400"
                    variant="outline"
                    size="lg"
                  >
                    <Link href="/resume.pdf">
                      <FileText size={24} />
                    </Link>
                  </IconButton>
                </Tooltip>
              </HStack>
            </VStack>
            <Center>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
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
