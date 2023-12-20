import React from 'react'
import ChangePicture from './ChangePicture'
import ChangeLangTime from './ChangeLangTime'
import GeneralInformation from './GeneralInformation'
import ChangePassword from './ChangePassword'
import SessionsComponent from './SessionsComponent'

function ProfileSetting() {
  return (
    <>
    <ChangePicture/>
    <ChangeLangTime/>
    <GeneralInformation/>
    <ChangePassword/>
    <SessionsComponent/>
    </>
   
  )
}

export default ProfileSetting