export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

export const convertPaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case 'credit':
      return 'Cartão de Crédito'
    case 'debit':
      return 'Cartão de Débito'
    case 'money':
      return 'Dinheiro'
    default:
      return 'Não informado'
  }
}
