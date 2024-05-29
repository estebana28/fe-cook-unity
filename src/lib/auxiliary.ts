export const capitalizeString = (str: string) => {
  if (!str) return
  const word = str.toLowerCase()
  return word.charAt(0).toUpperCase() + word.slice(1)
}
