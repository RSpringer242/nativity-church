import { FaCross } from "react-icons/fa";

export default {
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  icon: FaCross,

  fields: [
    {
      name: 'title',
      title: 'Ministry Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Ministry Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'about',
      title: 'Ministry Information',
      type: 'string'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ]
}