// import { defineField, defineType } from "sanity";

// export default defineType({
//     name: "gallery",
//     title: "Gallery",
//     type: "document",

//     fields: [
//         defineField({
//             name: "title",
//             title: "Title",
//             type: "string",
//             validation: Rule => Rule.required(),
//         }),

//         defineField({
//             name: "slug",
//             title: "Slug",
//             type: "slug",
//             options: {
//                 source: "title",
//                 maxLength: 96,
//             },
//             validation: Rule => Rule.required(),
//         }),

//         defineField({
//             name: "image",
//             title: "Image",
//             type: "image",
//             options: {
//                 hotspot: true,
//             },
//             validation: Rule => Rule.required(),
//         }),

//         defineField({
//             name: "category",
//             title: "Category",
//             type: "string",
//             options: {
//                 list: [
//                     { title: "Japanese Classes", value: "classroom" },
//                     { title: "Seminar", value: "seminar" },
//                     { title: "Events", value: "events" },
//                     { title: "Visa Success", value: "visa-success" },
//                     { title: "Student Activities", value: "student-activities" },
//                     { title: "Graduation", value: "graduation" },
//                     { title: "Japan", value: "japan" },
//                 ],
//             },

//         }),

//         defineField({
//             name: "description",
//             title: "Description",
//             type: "text",
//             rows: 3,
//         }),

//         defineField({
//             name: "location",
//             title: "Location",
//             type: "string",
//         }),

//         defineField({
//             name: "date",
//             title: "Date",
//             type: "date",
//         }),

//         defineField({
//             name: "featured",
//             title: "Featured on Homepage",
//             type: "boolean",
//             initialValue: false,
//         }),

//         defineField({
//             name: "displayOrder",
//             title: "Display Order",
//             type: "number",
//             initialValue: 1,
//         }),
//     ],

//     preview: {
//         select: {
//             title: "title",
//             media: "image",
//             subtitle: "category",
//         },
//     },
// });
// import { defineType } from "sanity";

// console.log("🔥 THIS IS THE REAL GALLERY FILE");

// const gallery = defineType({
//   name: "gallery",
//   title: "Gallery",
//   type: "document",
//   fields: [],
// });

// console.log("Gallery =", gallery);

// export default gallery;
import { defineType, defineField } from "sanity";

export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
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
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        }),

        defineField({
            name: "location",
            title: "Location",
            type: "string",
        }),

        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Japanese Classes", value: "classroom" },
                    { title: "Seminar", value: "seminar" },
                    { title: "Events", value: "events" },
                    { title: "Visa Success", value: "visa-success" },
                    { title: "Student Activities", value: "student-activities" },
                    { title: "Graduation", value: "graduation" },
                    { title: "Japan", value: "japan" },
                ],
            },
        }),

        defineField({
            name: "featured",
            title: "Featured on Homepage",
            type: "boolean",
            initialValue: false,
        }),

        defineField({
            name: "displayOrder",
            title: "Display Order",
            type: "number",
            initialValue: 1,
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
});