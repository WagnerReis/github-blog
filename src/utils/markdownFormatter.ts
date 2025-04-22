export function markdownFormatter(content: string) {
  return content.replace("```", `\`\`\``);
}
