import React from 'react'

import Beacon from '../components/Beacon'

export default {
  title: 'Beacon',
  component: Beacon
}

const BeaconTemplate = (args) => <Beacon {...args} />

export const PositiveStatus = BeaconTemplate.bind({})

PositiveStatus.args = {
  status: 'positive'
}

export const NeutralStatus = BeaconTemplate.bind({})

NeutralStatus.args = {
  status: 'neutral'
}

export const NegativeStatus = BeaconTemplate.bind({})

NegativeStatus.args = {
  status: 'negative'
}

export const DormantStatus = BeaconTemplate.bind({})

DormantStatus.args = {
  status: 'dormant'
}

export const FastSpeed = BeaconTemplate.bind({})

FastSpeed.args = {
  status: 'positive',
  speed: 'fast'
}

export const SlowSpeed = BeaconTemplate.bind({})

SlowSpeed.args = {
  status: 'positive',
  speed: 'slow'
}

export const CustomSpeed = BeaconTemplate.bind({})

CustomSpeed.args = {
  status: 'positive',
  speed: 5000
}

export const CustomColorScheme = BeaconTemplate.bind({})

CustomColorScheme.args = {
  colors: {
    positive: '#00c0d9'
  }
}

export const NoAnimationScale = BeaconTemplate.bind({})

NoAnimationScale.args = {
  status: 'negative',
  scaleBeacon: false
}

export const CustomSize = BeaconTemplate.bind({})

CustomSize.args = {
  size: '1.5em'
}
