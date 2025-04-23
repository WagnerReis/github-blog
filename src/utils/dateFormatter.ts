import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function dateFormatter(value: string) {
  const startedAtRelativeToNow = formatDistanceToNow(new Date(value), {
    locale: ptBR,
    addSuffix: true,
  });

  return startedAtRelativeToNow;
}
