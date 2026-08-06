import { defineType, defineField } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About Section",
  type: "document",

  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "experience",
      title: "Experience (Years)",
      type: "number",
    }),

    defineField({
      name: "students",
      title: "Students Placed",
      type: "number",
    }),

    defineField({
      name: "universities",
      title: "Partner Universities",
      type: "number",
    }),
  ],
});