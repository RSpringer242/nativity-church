import { FaFileImage } from "react-icons/fa";

export default {
  name: 'pageBanner',
  title: 'Page Banner',
  type: 'document',
  icon: FaFileImage,

  fields: [
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'page',
      title: 'Page Name',
      type: 'string'
    }
  ]
}