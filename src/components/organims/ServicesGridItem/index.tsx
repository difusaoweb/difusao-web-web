import * as React from 'react'
import { Typography, Box, Grid } from '@mui/material'

import styles from './index.module.scss'
import { CardInterface } from '../../ecosystems/Services/db'

interface ServicesGridItemProps {
  item: CardInterface
}
export const ServicesGridItem = ({ item }: ServicesGridItemProps) => {
  return (
    <Grid item xs={6} md={3}>
      <Box className={styles.card}>
        <Box className={styles.gridItemBox}>
          <Box className={styles.imagem}>
            <img className={styles.img} src={item.image} alt={item.title} />
          </Box>
          <Typography className={styles.h4} variant="h4" component="p">
            {item.title}
          </Typography>

          <ul className={styles.ul}>
            {item.list.map((operation, index) => (
              <li key={index} className={styles.li}>
                <Typography
                  component="p"
                >
                  {operation}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Grid>
  )
}
