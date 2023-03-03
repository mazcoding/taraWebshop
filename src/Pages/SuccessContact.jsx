import { VStack, Box, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function SuccessContact() {

    const redirect = useNavigate();

  return (
<VStack spacing="10" justifyContent="center" alignItems="center" height="55vh">
        <Alert
        borderRadius="5"
        maxW="fit-content"
        status='success'
        ariant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'>
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
            Message sent!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
            Thanks for contacting us. Our team will get in touch with you soon.
            </AlertDescription>
        </Alert>
        <Button onClick={() => redirect('/tarawebshop')}>Continue Shopping</Button>
    </VStack>
  )
}

export default SuccessContact