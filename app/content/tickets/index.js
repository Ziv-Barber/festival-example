// @flow

import ticketsA from './type_a.jpg'
import ticketsB from './type_b.jpg'
import ticketsC from './type_vip.jpg'

const ticketsList = [
  {
    key: 'first',
    name: 'First 1000 tickets',
    image: ticketsA,
    price: '100€',
    desc: 'Reducted price'
  },
  {
    key: 'normal',
    name: 'Normal tickets',
    image: ticketsB,
    price: '150€',
    desc: 'Normal tickets'
  },
  {
    key: 'vip',
    name: 'V.I.P. tickets',
    image: ticketsC,
    price: '300€',
    desc: 'V.I.P. tickets'
  }
]

export default ticketsList
