import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateRelativeToNow(dateStr: string) {
  const date = new Date(dateStr)
  return formatDistanceToNow(date, { locale: ptBR, addSuffix: true })
}
