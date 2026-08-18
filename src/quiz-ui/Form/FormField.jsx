import { useQuizFormData } from '../../quiz/hooks/useQuizFormData'
import { Field, Label, InputWrapper, IconSlot, Input } from './FormField.styles'

export const FormField = ({ id, type = 'text', name, placeholder, label, icon }) => {
  const { setForm } = useQuizFormData()

  return (
    <Field>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        {icon && <IconSlot>{icon}</IconSlot>}
        <Input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          $hasIcon={Boolean(icon)}
          onChange={({ target: { name: fieldName, value } }) =>
            setForm(prev => ({ ...prev, [fieldName]: value }))
          }
        />
      </InputWrapper>
    </Field>
  )
}