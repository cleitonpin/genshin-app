import * as Yup from 'yup'

export const userValidator = Yup.object().shape({
  name: Yup.string().required("Invalid name").label('Nome'),
  password: Yup.string().required("Invalid password").min(6, 'Pelo menos 6 caracteres').label('Senha'),
})

export const registerValidator = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email').label('Email'),
})
