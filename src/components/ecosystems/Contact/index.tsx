import React from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon
} from '@mui/material'

import styles from './index.module.scss'
import { db as cards } from './db'

export const Contact: React.FC = () => {
  return (
    <Box id="contact" className={styles.section} component="section">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <></>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h2" component="h2" className={styles.h2}>
              Contato
            </Typography>
            <Box
              justifyContent="center"
              alignContent="center"
              className={styles.divDivider}
            >
              <Divider className={styles.divider} />
            </Box>
            <nav aria-label="main mailbox folders">
              <List>
                {cards.map((contact, index) => (
                  <ListItem key={index}>
                    <ListItemButton component="a" href={contact.link}>
                      <ListItemIcon className={styles.iconDiv}>
                        {contact.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            className={styles.p}
                          >
                            {contact.title}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
