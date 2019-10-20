import { FaRegCalendarAlt } from "react-icons/fa";

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: FaRegCalendarAlt,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM-Do',
        timeFormat: 'h:mm a',
        calendarTodayLabel: 'Today'
      }
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
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Event Excerpt',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'text'
    }
  ]
}