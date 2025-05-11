export function getInitials(nome: string) {
  const palavras = nome.trim().split(/\s+/);
  const primeira = palavras[0]?.charAt(0).toUpperCase() || "";
  const ultima = palavras[palavras.length - 1]?.charAt(0).toUpperCase() || "";

  return primeira + ultima;
}
