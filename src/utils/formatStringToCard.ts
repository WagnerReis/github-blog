export function formatStringToCard(text: string) {
  const subString = text.substring(0, 181);
  return `${subString}...`;
}
