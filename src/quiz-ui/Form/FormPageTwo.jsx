import { FormField } from './FormField'
import { PageContainer } from './FormPage.styles'
import { MailIcon } from '../icons'

export const FormPageTwo = () => {
  return (
    <PageContainer>
      <FormField
        id="email"
        name="email"
        type="text"
        label="Correo electrónico"
        placeholder="Ingresa tu correo"
        icon={<MailIcon />}
      />
    </PageContainer>
  )
}