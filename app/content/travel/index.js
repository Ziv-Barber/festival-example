// @flow

import bus from './bus.png'
import train from './train.png'
import plane from './plane.png'

const travelList = [
  {
    key: 'bus',
    name: 'bus',
    image: bus,
    options: [
      {
        name: 'Flixbus',
        url: 'https://global.flixbus.com/'
      }
    ]
  },
  {
    key: 'train',
    name: 'train',
    image: train,
    options: [
      {
        name: 'Flixtrain',
        url: 'https://www.flixtrain.com'
      }
    ]
  },
  {
    key: 'plane',
    name: 'plane',
    image: plane,
    options: [
      {
        name: 'Skyscanner',
        url: 'https://www.skyscanner.com'
      }
    ]
  }
]

export default travelList
