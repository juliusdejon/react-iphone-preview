import * as React from 'react'

interface IphoneProps {
  height: string | number
  width: string | number
}

export const Iphone: React.SFC<IphoneProps> = () => {
  const container = {
    fontFamily: 'Open Sans',
    width: '240px',
    height: '500px',
    background: '#f4f6fc'
  }
  const iphoneCase = {
    overflow: 'hidden',
    // position: 'relative',
    height: '100%',
    width: '100%',
    // backgroundIimage: url('https://i.pinimg.com/236x/11/45/c1/1145c15eb7c0bf49f7db50ad8a5efb85.jpg'),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '30px',
    boxShadow:
      '0px 0px 0px 4px #1f1f1f, 0px 0px 0px 4px #191919, 0px 0px 0px 12px #111'
  }

  return (
    <div style={container}>
      <div style={iphoneCase}>
        <div className='react-iphone__speaker' />
        <div className='react-iphone__camera' />
        hello
      </div>
    </div>
  )
}
