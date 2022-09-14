import * as React from 'react'
import {
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material'

import { contacts } from '../../../store/contacts'
import styles from './index.module.scss'

interface CardInterface {
  title: string
  link: string
  icon: JSX.Element
}
export const db: CardInterface[] = [
  {
    title: 'Instagram',
    link: contacts.instagram,
    icon: <InstagramIcon className={styles.icon} />
  },
  {
    title: 'WhatsApp',
    link: contacts.whatsapp,
    icon: <WhatsAppIcon className={styles.icon} />
  },
  {
    title: 'Telefone',
    link: contacts.phone,
    icon: <PhoneIcon className={styles.icon} />
  },
  {
    title: 'E-Mail',
    link: contacts.eMail,
    icon: <EmailIcon className={styles.icon} />
  }
]
