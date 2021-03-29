import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const generateAnimation = ({ status, colors }) => {
  let color = null
  let size = null
  // OPTIMIZE: change size based on size prop

  switch (status) {
    case 'positive':
      color = colors.positive
      size = '250%'
      break
    case 'neutral':
      color = colors.neutral
      size = '200%'
      break
    case 'negative':
      color = colors.negative
      size = '160%'
      break
    default:
      color = colors.dormant
  }

  return keyframes`
  {
    0% {
      height: 75%;
      width: 75%;
      background-color: ${color + '88'};
    }
    100% {
      height: ${size};
      width: ${size};
      background-color: ${color + '07'};
    }
  }
`
}

const mapPropToSpeed = (speed) =>
  ({
    normal: '1300ms',
    fast: '800ms',
    slow: '2500ms'
  }[speed] || '1300ms')

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  z-index: 1;
  height: 1em;
  width: 1em;
  vertical-align: middle;
  margin: 0 0.5em;

  &::after {
    content: '';
    height: 1em;
    width: 1em;
    // default to dormant color
    ${({ colors }) =>
      css`
        background-color: ${colors.dormant};
      `}
    display: inline-block;
    border-radius: 1em;
    position: relative;
    height: 100%;
    width: 100%;
    ${({ status, colors }) => {
      switch (status) {
        case 'positive':
          return css`
            background-color: ${colors.positive};
          `
        case 'neutral':
          return css`
            background-color: ${colors.neutral};
          `
        case 'negative':
          return css`
            background-color: ${colors.negative};
          `
        case 'dormant':
          return css`
            background-color: ${colors.dormant};
          `
        default:
          return css`
            background-color: ${colors.dormant};
          `
      }
    }}
  }

  &::before {
    content: '';
    height: 75%;
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background-color: #64cfb0;
    transform-origin: center center;
    z-index: -1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    ${({ status, colors, speed }) => {
      switch (status) {
        case 'positive':
          return css`
            animation: ${(props) => generateAnimation(props)}
              ${({ speed }) => mapPropToSpeed(speed)} ease-in-out infinite;
          `
        case 'neutral':
          return css`
            animation: ${(props) => generateAnimation(props)}
              ${({ speed }) => mapPropToSpeed(speed)} ease-in-out infinite;
          `
        case 'negative':
          return css`
            animation: ${(props) => generateAnimation(props)}
              ${({ speed }) => mapPropToSpeed(speed)} ease-in-out infinite;
          `
        default:
          return ''
      }
    }}
  }
`

const Beacon = (props) => {
  const args = _.defaults({}, props, {
    colors: {
      positive: '#309D7D',
      neutral: '#FFC800',
      negative: '#D62828',
      dormant: '#666666'
    },
    status: 'positive',
    speed: 'normal'
  })
  return <Wrapper {...args} />
}

// Beacon.defaultProps = {
//   status: 'positive'
// }

Beacon.propTypes = {
  colors: PropTypes.object,
  status: PropTypes.string
}

export default Beacon