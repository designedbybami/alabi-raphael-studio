import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons/Image";

export const artwork = defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
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
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Portrait", value: "portrait" },
          { title: "Scene", value: "scene" },
          { title: "Pattern", value: "pattern" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "medium",
      type: "string",
      description: "e.g. Oil on canvas, Digital, Charcoal",
    }),
    defineField({
      name: "year",
      type: "number",
      validation: (rule) => rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: "dimensions",
      type: "string",
      description: "e.g. 24 x 36 in",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured on homepage",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "category" },
  },
});
