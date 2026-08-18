import { FormField } from './FormField'
import { PageContainer } from './FormPage.styles'
import { UserIcon } from '../icons'

export const FormPageOne = () => {
  return (
    <PageContainer>
      <FormField
        id="name"
        name="name"
        type="text"
        label="Nombre completo"
        placeholder="Ingresa tu nombre"
        icon={<UserIcon />}
      />
    </PageContainer>
  )
}