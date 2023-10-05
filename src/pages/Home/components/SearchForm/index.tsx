import { useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'

const searchFormValidationSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormValidationSchema>

interface SearchFormProps {
  onFetchIssues: (query?: string) => Promise<void>
}

export function SearchForm({ onFetchIssues }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormValidationSchema),
    defaultValues: {
      query: '',
    },
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    onFetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}
