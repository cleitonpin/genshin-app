import * as Yup from 'yup'

export const userValidator = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório").label('Nome'),
  password: Yup.string().required("Senha obrigatória").min(6, 'Pelo menos 6 caracteres').label('Senha'),
})

export const registerValidator = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email obrigatório').label('Email'),
})
