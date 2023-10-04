import { InputSearch, SearchFormContainer, SearchTotal } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchTotal>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchTotal>
      <InputSearch type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
