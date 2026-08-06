export const aboutQuery = `
*[_type=="about"][0]{
  badge,
  title,
  description,
  image,
  experience,
  students,
  universities
}
`;