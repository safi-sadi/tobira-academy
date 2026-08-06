export const heroQuery = `
*[_type=="hero"][0]{
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image
}
`;