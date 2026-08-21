import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons/Image";

export const work = defineType({
  name: "work",
  title: "Work",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required().warning("Alt text is important for accessibility and SEO"),
        }),
      ],
    }),
    defineField({
      name: "type",
      type: "string",
      description: "Which section of the site this belongs to — used to sort it into the right page",
      options: {
        list: [
          { title: "Artwork", value: "artwork" },
          { title: "Brand Design", value: "brandDesign" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Pick an existing category, or create a new one from this field if it's not listed yet",
    }),
    defineField({
      name: "client",
      type: "string",
      description: "If this piece was commissioned, name the client here",
    }),
    defineField({
      name: "year",
      type: "number",
      validation: (rule) => rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 2,
      description: "A brief line shown alongside the work in listings",
      validation: (rule) => rule.max(160).warning("Keep this short — it's meant for previews, not the full story"),
    }),
    defineField({
      name: "about",
      title: "About this work",
      type: "text",
      rows: 6,
      description: "The longer story behind the piece, shown on its own page",
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
              validation: (rule) => rule.required().warning("Alt text is important for accessibility and SEO"),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured on homepage",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category.title" },
  },
});
