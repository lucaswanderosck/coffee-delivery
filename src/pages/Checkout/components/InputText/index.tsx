import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'

import { Container, Content, ErrorMessage } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const InputText = forwardRef(function InputText(
  { optional, containerProps, onFocus, onBlur, error, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Container {...containerProps}>
      <Content data-state={isFocused ? 'focused' : 'blurred'}>
        <input onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...rest} />
        {optional ? <span>Opcional</span> : null}
      </Content>
      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Container>
  )
})
