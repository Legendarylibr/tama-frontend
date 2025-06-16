import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, VStack, HStack, Heading, Text, Progress, Button, Image, useToast } from '@chakra-ui/react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

interface PetStats {
  happiness: number;
  energy: number;
  health: number;
}

const PetInteraction: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const toast = useToast();

  const [stats, setStats] = useState<PetStats>({
    happiness: 80,
    energy: 70,
    health: 90
  });

  const handleInteraction = async (action: 'feed' | 'play' | 'rest') => {
    if (!publicKey) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet to interact with your pet',
        status: 'warning',
        duration: 3000,
        isClosable: true
      });
      return;
    }

    try {
      // Example transaction - in reality, this would interact with your Solana program
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('YOUR_PROGRAM_ID'),
          lamports: 100000
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');

      // Update pet stats based on action
      setStats(prevStats => {
        const newStats = { ...prevStats };
        switch (action) {
          case 'feed':
            newStats.health = Math.min(100, newStats.health + 10);
            newStats.energy = Math.min(100, newStats.energy + 5);
            break;
          case 'play':
            newStats.happiness = Math.min(100, newStats.happiness + 15);
            newStats.energy = Math.max(0, newStats.energy - 10);
            break;
          case 'rest':
            newStats.energy = Math.min(100, newStats.energy + 20);
            newStats.health = Math.min(100, newStats.health + 5);
            break;
        }
        return newStats;
      });

      toast({
        title: 'Success!',
        description: `Your pet enjoyed the ${action} session!`,
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to perform action. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Box maxW="container.md" mx="auto" pt={20} px={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image
            src={`/pets/${id}.png`}
            alt={id}
            boxSize="300px"
            objectFit="cover"
            borderRadius="full"
            mx="auto"
          />
          <Heading size="2xl" mt={4} color="purple.600">
            {id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Unknown Pet'}
          </Heading>
        </Box>

        <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Text fontWeight="bold">Happiness</Text>
              <Progress value={stats.happiness} colorScheme="pink" w="70%" />
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Energy</Text>
              <Progress value={stats.energy} colorScheme="blue" w="70%" />
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Health</Text>
              <Progress value={stats.health} colorScheme="green" w="70%" />
            </HStack>
          </VStack>
        </Box>

        <HStack spacing={4} justify="center">
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => handleInteraction('feed')}
          >
            Feed
          </Button>
          <Button
            colorScheme="pink"
            size="lg"
            onClick={() => handleInteraction('play')}
          >
            Play
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={() => handleInteraction('rest')}
          >
            Rest
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PetInteraction; 
