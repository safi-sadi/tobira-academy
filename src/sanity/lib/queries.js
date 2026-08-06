import { groq } from "next-sanity";

export const featuredGalleryQuery = groq`
*[
  _type=="gallery" &&
  featured==true
]
| order(displayOrder asc){

  _id,
  title,
  image,
  category,
  location,
  date,
  description,
  slug

}[0...6]
`;

export const allGalleryQuery = groq`
*[_type=="gallery"]
| order(displayOrder asc){

  _id,
  title,
  image,
  category,
  location,
  date,
  description,
  slug

}
`;