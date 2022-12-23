import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  Image,
  Box,
} from '@chakra-ui/react';
import clint from './ClintPortal.png';

export default function Modalcostum() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        display={{
          base: 'none',
          md: 'none',
          xl: 'flex',
        }}
        color={'#292a2d'}
        colorScheme={'#fefefe'}
        onClick={onOpen}
        fontSize={'14px'}
        borderRadius={'3px'}
        border={'0.1px solid #878787'}
        lineHeight={'21px'}
      >
        Client Portal
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box ml={'-200px'} w={'900px'} h={'500px'}>
            {' '}
            <Image h={'100%'} w={'100%'} src={clint} />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
