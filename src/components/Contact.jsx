import {
  Box,
  Container,
  Text,
  VStack,
  Link,
  Heading,
  SimpleGrid,
  Card,
} from "@chakra-ui/react";
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import Resume from "../assets/JamesMartineau_Resume.pdf";

export default function Contact() {
  const ContactCard = ({ children, download, href }) => (
    <Card.Root
      as="a"
      href={href}
      download={download}
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
      target={download ? "_self" : "_blank"}
    >
      <Card.Body
        textAlign="center"
        gap={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {children}
      </Card.Body>
    </Card.Root>
  );
  return (
    <Box id="contact" py={20} bg="gray.900">
      <Container maxW="7xl">
        <VStack gap={8}>
          <Heading size="2xl" color="purple.400" textAlign="center">
            Let's Work Together
          </Heading>
          <Text fontSize="xl" color="gray.300" textAlign="center" maxW="600px">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can create something amazing
            together.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4}} gap={4} w="100%">
            <ContactCard href="https://github.com/jamesmart77">
              <Github size={32} color="#9F7AEA" />
              <Text color="white" fontWeight="medium">
                GitHub
              </Text>
              <Text color="gray.400" fontSize="sm">
                View my code
              </Text>
            </ContactCard>

            <ContactCard href="https://www.linkedin.com/in/jamesrmartineau/">
              <Linkedin size={32} color="#F56565" />
              <Text color="white" fontWeight="medium">
                LinkedIn
              </Text>
              <Text color="gray.400" fontSize="sm">
                Connect with me
              </Text>
            </ContactCard>

            <ContactCard href="mailto:jamesmart77@gmail.com">
              <Mail size={32} color="#ECC94B" />
              <Text color="white" fontWeight="medium">
                Email
              </Text>
              <Text color="gray.400" fontSize="sm">
                Jamesmart77@gmail.com
              </Text>
            </ContactCard>

            <ContactCard href={Resume} download="JamesMartineau_Resume.pdf">
              <FileText size={32} color="#9F7AEA" />
              <Text color="white" fontWeight="medium">
                Resume
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <Download size={16} />
                Download PDF
              </Text>
            </ContactCard>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
