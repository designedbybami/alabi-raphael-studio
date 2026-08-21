import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons/Case";

export const brandDesign = defineType({
  name: "brandDesign",
  title: "Brand Design",
  type: "document",
  icon: CaseIcon,
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
      name: "client",
      type: "string",
    }),
    defineField({
      name: "year",
      type: "number",
      validation: (rule) => rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: "coverImage",
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
      name: "description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured on homepage",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "client" },
  },
});
