import { FormField } from './FormField'
import { PageContainer } from './FormPage.styles'
import { LockIcon } from '../icons'

export const FormPageThree = () => {
  return (
    <PageContainer>
      <FormField
        id="password"
        name="password"
        type="text"
        label="Clave"
        placeholder="Ingresa tu clave"
        icon={<LockIcon />}
      />
    </PageContainer>
  )
}