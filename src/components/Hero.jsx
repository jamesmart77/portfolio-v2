import {
  Box,
  Container,
  Flex,
  VStack,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Code, Linkedin } from "lucide-react";

export default function Hero({ isMobile, scrollToSection }) {
  return (
    <Box
      id="hero"
      position="relative"
      height="100vh"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url(/portfolio-v2/profile.webp)`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="scroll"
        opacity={0.5} // Adjust this value as needed
        zIndex={0}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(45deg, rgba(0,0,0,0.7), rgba(76,29,149,0.3), rgba(0,0,0,0.8))"
        zIndex={1}
      />
      <Container maxW="7xl" height="100%" position="relative" zIndex={1}>
        <Flex
          height="100%"
          align="center"
          justify={isMobile ? "center" : "flex-start"}
          textAlign={isMobile ? "center" : "left"}
        >
          <VStack
            gap={6}
            align={isMobile ? "center" : "flex-start"}
            maxW="600px"
          >
            <Text
              fontSize={isMobile ? "3xl" : "5xl"}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Full-Stack Developer & Solutions Engineer
            </Text>
            <Text fontSize={isMobile ? "lg" : "xl"} color="white" maxW="500px">
              Passionate about creating innovative solutions and scalable
              applications that make a difference and are fit for purpose
            </Text>
            <HStack
              gap={4}
              wrap="wrap"
              justify={isMobile ? "center" : "flex-start"}
            >
              <Button asChild colorPalette="purple" size="lg">
                <Link
                  href="https://www.linkedin.com/in/jamesrmartineau/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  Let's Connect
                </Link>
              </Button>
              <Button
                variant="subtle"
                color="purple"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                <Code size={20} />
                View My Work
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
