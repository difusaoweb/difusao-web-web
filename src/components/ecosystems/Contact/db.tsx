import * as React from 'react'
import {
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
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
    title: contacts.eMail.title,
    link: contacts.eMail.link,
    icon: <EmailIcon className={styles.icon} />
  },
  {
    title: contacts.whatsapp.title,
    link: contacts.whatsapp.link,
    icon: <WhatsAppIcon className={styles.icon} />
  },
  {
    title: contacts.linkedin.title,
    link: contacts.linkedin.link,
    icon: <LinkedInIcon className={styles.icon} />
  },
  {
    title: contacts.github.title,
    link: contacts.github.link,
    icon: <GitHubIcon className={styles.icon} />
  }
]
