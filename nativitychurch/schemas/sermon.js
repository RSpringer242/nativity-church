import { FaBook } from "react-icons/fa";

export default {
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  icon: FaBook,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM-Do',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'image',
      title: 'Sermon Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
  ]
}