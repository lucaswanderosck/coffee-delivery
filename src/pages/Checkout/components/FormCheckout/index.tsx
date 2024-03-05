import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { InputText } from '../InputText'
import {
  Container,
  DeliveryAddress,
  DeliveryAddressForm,
  DeliveryAddressTitle,
  Payment,
  PaymentButton,
  PaymentTitle,
  PaymentType,
} from './styles'

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

const AddressValidationSchema = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'money']),
})

export type TypeAddressSchema = z.infer<typeof AddressValidationSchema>

export const FormCheckout: React.FC<Props> = ({ ...props }) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeAddressSchema>({
    resolver: zodResolver(AddressValidationSchema),
  })

  const navigate = useNavigate()

  const HandleAddressSubmit = async (data: TypeAddressSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    navigate('/success', { state: data })

    reset()
  }

  return (
    <Container {...props} onSubmit={handleSubmit(HandleAddressSubmit)}>
      <DeliveryAddress>
        <DeliveryAddressTitle>
          <MapPinLine size={22} color="#c47f17" />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido </p>
          </div>
        </DeliveryAddressTitle>

        <DeliveryAddressForm>
          <InputText
            placeholder="CEP"
            type="number"
            containerProps={{ style: { gridArea: 'cep' } }}
            error={errors.cep}
            {...register('cep', { valueAsNumber: true })}
          />

          <InputText
            placeholder="Rua"
            containerProps={{ style: { gridArea: 'street' } }}
            error={errors.street}
            {...register('street')}
          />

          <InputText
            placeholder="Número"
            type="number"
            containerProps={{ style: { gridArea: 'number' } }}
            error={errors.number}
            {...register('number')}
          />

          <InputText
            placeholder="Complemento"
            optional
            containerProps={{ style: { gridArea: 'fullAddress' } }}
            error={errors.fullAddress}
            {...register('fullAddress')}
          />

          <InputText
            placeholder="Bairro"
            containerProps={{ style: { gridArea: 'neighborhood' } }}
            error={errors.neighborhood}
            {...register('neighborhood')}
          />

          <InputText
            placeholder="Cidade"
            containerProps={{ style: { gridArea: 'city' } }}
            error={errors.city}
            {...register('city')}
          />

          <InputText
            placeholder="UF"
            maxLength={2}
            error={errors.state}
            style={{ textTransform: 'uppercase' }}
            containerProps={{
              style: { gridArea: 'state' },
            }}
            {...register('state')}
          />
        </DeliveryAddressForm>
      </DeliveryAddress>

      <Payment>
        <PaymentTitle>
          <CurrencyDollar size={22} color="#8047f8" />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentTitle>

        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <RadioGroup.Root>
              <PaymentType value={field.value} onValueChange={field.onChange}>
                <PaymentButton value="credit">
                  <CreditCard size={16} color="#8047f8" />
                  <span>Cartão de Crédito</span>
                </PaymentButton>
                <PaymentButton value="debit">
                  <Bank size={16} color="#8047f8" />
                  <span>Cartão de Débito</span>
                </PaymentButton>
                <PaymentButton value="money">
                  <Money size={16} color="#8047f8" />
                  <span>Dinheiro</span>
                </PaymentButton>
              </PaymentType>
            </RadioGroup.Root>
          )}
        />
      </Payment>
    </Container>
  )
}
