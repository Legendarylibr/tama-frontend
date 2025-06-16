import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Heading, Text, Image, Button, VStack, Container } from '@chakra-ui/react';

interface Pet {
  id: string;
  name: string;
  description: string;
  image: string;
}

const pets: Pet[] = [
  {
    id: 'luna',
    name: 'Luna',
    description: 'A mystical moon spirit with calming energy',
    image: '/pets/luna.png'
  },
  {
    id: 'stella',
    name: 'Stella',
    description: 'A bright star guardian full of warmth',
    image: '/pets/stella.png'
  },
  {
    id: 'nova',
    name: 'Nova',
    description: 'An energetic cosmic explorer',
    image: '/pets/nova.png'
  }
];

const PetSelection: FC = () => {
  const navigate = useNavigate();

  const handlePetSelect = (petId: string) => {
    navigate(`/pet/${petId}`);
  };

  return (
    <Container maxW="container.xl" pt={20}>
      <VStack spacing={8} align="center" mb={12}>
        <Heading size="2xl" color="purple.600">
          Choose Your Celestial Companion
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Select a magical pet to begin your cosmic journey
        </Text>
      </VStack>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
        {pets.map((pet) => (
          <Box
            key={pet.id}
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="xl"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-4px)' }}
          >
            <VStack spacing={4}>
              <Image
                src={pet.image}
                alt={pet.name}
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading size="lg" color="purple.500">
                {pet.name}
              </Heading>
              <Text color="gray.600" textAlign="center">
                {pet.description}
              </Text>
              <Button
                colorScheme="purple"
                size="lg"
                width="full"
                onClick={() => handlePetSelect(pet.id)}
              >
                Choose {pet.name}
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default PetSelection; 