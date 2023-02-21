import { Heading, Center, Box, Image, Container } from "@chakra-ui/react";


const Welcome = () => {
  return (
    <Container className="welcome-container" >
      <Center>
        <Box boxSize="xxl">
          <Image src="https://media.giphy.com/media/3oKGzgNfssFG1xlwC4/giphy.gif" alt="image" />
        </Box>
      </Center>
    </Container>
  );
};

export default Welcome;
