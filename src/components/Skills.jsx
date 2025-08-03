import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  HStack,
  Badge,
  Heading,
  SimpleGrid,
  Card,
  Separator,
} from "@chakra-ui/react";
import {
  Code,
  Database,
  Globe,
  Users,
  Target,
  MessageCircle,
  Lightbulb,
  UserStar,
  Clock,
  HatGlasses,
  Cog,
  Cloud,
} from "lucide-react";

export default function TechnicalSkills() {
  const skillCategories = {
    Frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "React-Query",
      "HTML5/CSS3",
      "Sass",
      "Next.js",
      "Chakra UI",
      "Vite",
    ],
    Backend: [
      "Node.js",
      "Java",
      "Express",
      "API Gateway",
      "GraphQL",
      "RESTful APIs",
      "Serverless",
      "Lambda",
    ],
    Database: ["PostgreSQL", "MySQL", "DynamoDB", "AWS Aurora"],
    DevOps: [
      "CloudWatch",
      "CI/CD",
      "GitHub",
      "Docker",
      "Observability",
      "Monitoring",
      "Logging",
      "Grafana",
      "Infrastructure as Code",
      "Automation",
    ],
    Cloud: [
      "AWS",
      "Amplify",
      "CDK",
      "CloudFormation",
      "Route 53",
      "CloudFront",
      "RDS",
      "SNS",
      "SQS",
      "VPC",
      "Cognito",
    ],
  };

  const softSkills = [
    { name: "Leadership", icon: UserStar, color: "red.400" },
    { name: "Communication", icon: MessageCircle, color: "yellow.400" },
    { name: "Problem Solving", icon: Target, color: "purple.400" },
    { name: "Collaboration", icon: Users, color: "purple.400" },
    { name: "Mentoring", icon: HatGlasses, color: "yellow.400" },
    { name: "Innovation", icon: Lightbulb, color: "red.400" },
  ];

  const skillIcons = {
    Frontend: Globe,
    Backend: Code,
    Database: Database,
    DevOps: Cog,
    Cloud: Cloud,
  };

  return (
    <Box id="skills" py={20} bg="gray.900">
      <Container maxW="7xl">
        <VStack gap={8}>
          <Heading as="h2" size="2xl" color="purple.400" textAlign="center">
            Skills & Expertise
          </Heading>

          {/* Technical Skills */}
          <Box w="100%">
            <Heading
              as="h3"
              size="lg"
              color="red.400"
              mb={8}
              textAlign="center"
            >
              Technical Skills
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {Object.entries(skillCategories).map(([category, skills]) => {
                const IconComponent = skillIcons[category] || Code;
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
            <Heading
              as="h3"
              size="lg"
              color="yellow.400"
              mb={6}
              textAlign="center"
            >
              Soft Skills
            </Heading>
            <SimpleGrid columns={{ base: 3, sm: 4, lg: 6 }} gap={8}>
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
                    <Text color="white" fontWeight="medium" textAlign="center">
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
  );
}
