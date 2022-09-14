import * as React from 'react'
import { Fab } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import { contacts } from '../../../store/contacts'
import style from './index.module.scss'

export const FloatButton: React.FC = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      className={style.floatButton}
      href={contacts.whatsapp}
    >
      <WhatsAppIcon className={style.icon} />
    </Fab>
  )
}
