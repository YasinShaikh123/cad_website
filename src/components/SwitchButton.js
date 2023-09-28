import React,{ useState } from  'react'
import Switch from 'react-switch'

const SwitchButton = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
     
    const switch_onChange_handle = () => {
        setIsSwitchOn(!isSwitchOn);
        //...
      };
      
  return (
    <div className='swithbutton'>
        <Switch checkedIcon={<div className='mont'>Monthly</div>} uncheckedIcon={<div className='year'> Yearly</div>}  padding={4} offColor={'#4CCD8D'} onColor={'#707070'}
        width={110} height={35} checked={isSwitchOn} onChange={switch_onChange_handle} />
    </div>
  )
}

export default SwitchButton
