'use client'
import * as React from 'react'
import { Fab } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'

import { contacts } from '../../../store/contacts'
import style from './index.module.scss'

export const FloatButton: React.FC = () => {
  return (
    <Fab
      color="primary"
      aria-label="Contato"
      className={style.floatButton}
      href={contacts.eMail.link}
    >
      <EmailIcon className={style.icon} />
    </Fab>
  )
}
