import { useForm, SubmitHandler } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  Box,
} from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../../utils/contexts';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
}

const DetailsForm = () => {
  const { updateProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    try{
      updateProfile({
        ...values,
        name: `${values.firstname} ${values.lastname}`
      },
          () => navigate("/dashboard", {
            replace: true,
          })
        )
    } catch (error) {
      console.log('Failed updating user profile with', values)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack mt={8} spacing={4}>
        <FormControl isInvalid={!!(errors?.firstname || errors?.lastname || errors?.email)}>
          <FormLabel htmlFor='firstname'>Name<sup>*</sup></FormLabel>
          <Input
            id='firstname'
            placeholder='Enter your name'
            {...register('firstname', {
              required: 'Firstname is required'
            })}
          />
          <FormErrorMessage>
            {errors.firstname && errors.firstname.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='name'>Surname<sup>*</sup></FormLabel>
          <Input
            id='lastname'
            placeholder='Enter your surname'
            {...register('lastname', {
              required: 'This is required'
            })}
          />
          <FormErrorMessage>
            {errors.lastname && errors.lastname.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='email'>Email address<sup>*</sup></FormLabel>
          <Input
            id="email"
            type="email"
            placeholder='Enter your email address'
            {...register('email', {
              required: 'Email is required'
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <Box
          w="360px"
          h="44px"
          bg="#7F56D9"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderRadius={10}
        >
          <Button
            w="100%"
            fontWeight={500}
            fontSize="16px"
            lineHeight="24px"
            colorScheme="purple.400"
            type="submit"
          >
            Let's Go
          </Button>
        </Box>
      </Stack>
    </form>
  )
}

export default DetailsForm;