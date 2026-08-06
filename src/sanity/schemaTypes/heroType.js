import { defineType, defineField } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),

    defineField({
      name: "primaryButtonLink",
      title: "Primary Button Link",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});