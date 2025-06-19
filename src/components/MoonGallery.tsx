import { FC } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Image, Badge } from '@chakra-ui/react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  rarity: 'common' | 'rare' | 'legendary';
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: 'first-friend',
    title: 'First Friend',
    description: 'Adopt your first celestial companion',
    image: '/achievements/first-friend.png',
    rarity: 'common',
    unlocked: true
  },
  {
    id: 'happy-pet',
    title: 'Joy Bringer',
    description: 'Keep your pet at maximum happiness for 24 hours',
    image: '/achievements/happy-pet.png',
    rarity: 'rare',
    unlocked: false
  },
  {
    id: 'cosmic-collector',
    title: 'Cosmic Collector',
    description: 'Adopt all available celestial pets',
    image: '/achievements/collector.png',
    rarity: 'legendary',
    unlocked: false
  }
];

const MoonGallery: FC = () => {
  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'gray';
      case 'rare':
        return 'purple';
      case 'legendary':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  return (
    <Box maxW="container.xl" mx="auto" pt={20} px={4}>
      <VStack spacing={8} mb={12}>
        <Heading size="2xl" color="purple.600">
          Moon Gallery
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center">
          Showcase your achievements and celestial collectibles
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {achievements.map((achievement) => (
          <Box
            key={achievement.id}
            bg={achievement.unlocked ? 'white' : 'gray.100'}
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            opacity={achievement.unlocked ? 1 : 0.7}
            transition="transform 0.2s"
            _hover={{ transform: achievement.unlocked ? 'translateY(-4px)' : 'none' }}
          >
            <VStack spacing={4}>
              <Image
                src={achievement.image}
                alt={achievement.title}
                boxSize="150px"
                objectFit="cover"
                borderRadius="lg"
                filter={achievement.unlocked ? 'none' : 'grayscale(100%)'}
              />
              <Badge
                colorScheme={getRarityColor(achievement.rarity)}
                px={3}
                py={1}
                borderRadius="full"
              >
                {achievement.rarity.toUpperCase()}
              </Badge>
              <Heading size="md" color={achievement.unlocked ? 'purple.600' : 'gray.500'}>
                {achievement.title}
              </Heading>
              <Text color="gray.600" textAlign="center">
                {achievement.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoonGallery; 