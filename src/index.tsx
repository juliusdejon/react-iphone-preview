import * as React from 'react'

interface IphoneProps {
  height: string | number
  width: string | number
  backgroundStyle: object
  children: React.ReactNode
}

const defaultBg =
  'https://i.pinimg.com/236x/11/45/c1/1145c15eb7c0bf49f7db50ad8a5efb85.jpg'

export const Iphone: React.SFC<IphoneProps> = (props) => {
  const { height, width, backgroundStyle, children } = props

  const iphoneContainer = {
    width: width ? width : '240px',
    height: height ? height : '500px'
  }

  const iphoneBg = {
    backgroundImage: `url(${defaultBg})`
  }

  return (
    <div className='react-iphone__container' style={iphoneContainer}>
      <div
        className='react-iphone__case'
        style={backgroundStyle ? backgroundStyle : iphoneBg}
      >
        <div className='react-iphone__speaker' />
        <div className='react-iphone__camera' />
        {children}
      </div>
    </div>
  )
}
