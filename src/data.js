import {
  FaCreditCard,
  FaBook,
  FaBriefcase,
  FaLinux,
  FaGithub,
  FaGitlab,
  FaServer,
} from 'react-icons/fa'

import { GoCode } from 'react-icons/go'
import { BiPulse } from 'react-icons/bi'
import { RiStackFill } from 'react-icons/ri'
import { TiLocation } from 'react-icons/ti'

import React from 'react'

import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'

const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaGithub />, url: '/products' },
      { label: 'connect', icon: <FaLinux />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaGitlab />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'Documents', icon: <GoCode />, url: '/products' },
      { label: 'API Status', icon: <BiPulse />, url: '/products' },
      { label: 'Platforms', icon: <RiStackFill />, url: '/products' },
      { label: 'Servers', icon: <FaServer />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      {
        label: 'Los Angles, CA',
        icon: <TiLocation />,
        url: '/products',
        img: img1,
      },
      {
        label: 'New York, NY',
        icon: <TiLocation />,
        url: '/products',
        img: img2,
      },
      {
        label: 'Chicago, IL',
        icon: <TiLocation />,
        url: '/products',
        img: img3,
      },
    ],
  },
]

export default sublinks
