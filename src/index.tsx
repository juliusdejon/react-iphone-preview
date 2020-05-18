import * as React from 'react'

interface IphoneProps {
  height: string | number
  width: string | number
  background: string
}

const defaultBg =
  'https://i.pinimg.com/236x/11/45/c1/1145c15eb7c0bf49f7db50ad8a5efb85.jpg'

export const Iphone: React.SFC<IphoneProps> = (props) => {
  const { height, width, background } = props

  const iphoneContainer = {
    width: width ? width : '240px',
    height: height ? height : '500px'
  }

  const iphoneCase = {
    backgroundImage: `url(${background ? background : defaultBg})`
  }

  return (
    <div className='react-iphone__container' style={iphoneContainer}>
      <div className='react-iphone__case' style={iphoneCase}>
        <div className='react-iphone__speaker' />
        <div className='react-iphone__camera' />
      </div>
    </div>
  )
}
