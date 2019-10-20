import { FaChurch } from "react-icons/fa";

export default {
  name: 'churchInfo',
  title: 'Church Information',
  type: 'document',
  icon: FaChurch,

  fields: [
    {
      name: 'title',
      title: 'Church Name',
      type: 'string'
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string'
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string'
    },
    {
      name: 'facebookURL',
      title: 'Facebook URL',
      type: 'url'
    }
   
  ]
}