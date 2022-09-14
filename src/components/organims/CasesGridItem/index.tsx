import * as React from 'react'
import { Typography, Grid, Box, Card } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { isMobile } from 'react-device-detect'

import { CardInterface } from '../../ecosystems/Cases/db'
import styles from './index.module.scss'

interface CasesGridItemProps {
  item: CardInterface
}
export const CasesGridItem = ({ item }: CasesGridItemProps) => {
  return (
    <Grid item xs={6} md={3}>
      <Card className={styles.gridItem} raised>
        <Box className={styles.gridItemBox}>
          <Carousel
            autoPlay={true}
            animation="slide"
            duration={300}
            navButtonsAlwaysVisible={isMobile}
            className={styles.carousel}
          >
            {item.imagens.map((image, index) => (
              <Box key={index} className={styles.imagemBox}>
                <img
                  className={styles.img}
                  src={image}
                  alt={`${item.title}, ${item.description}-${index}`}
                />
              </Box>
            ))}
          </Carousel>
          <Box className={styles.texts}>
            <Typography className={styles.h3} variant="h5" component="h3">
              {item.title}
            </Typography>
            <Typography className={styles.p} variant="subtitle1" component="p">
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  )
}
