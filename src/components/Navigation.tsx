import { FC } from 'react';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const Navigation: FC = () => {
  return (
    <Box as="nav" bg="gray.800" px={6} py={4} position="fixed" top={0} left={0} right={0} zIndex={1000}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Flex align="center" gap={8}>
          <Link to="/">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Hoshino
            </Text>
          </Link>
          <Link to="/">
            <Button variant="ghost" color="gray.300" _hover={{ color: 'white' }}>
              Pets
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="ghost" color="gray.300" _hover={{ color: 'white' }}>
              Gallery
            </Button>
          </Link>
        </Flex>
        <Box>
          <WalletMultiButton />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation; 