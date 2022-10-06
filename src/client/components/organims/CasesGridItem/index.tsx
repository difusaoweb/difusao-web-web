import * as React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { isMobile } from 'react-device-detect'

import { CardInterface } from '../../ecosystems/Cases/db'
import { Card } from '../../atoms/Card'
import styles from './index.module.scss'

interface CasesGridItemProps {
  item: CardInterface
}
export const CasesGridItem = ({ item }: CasesGridItemProps) => {
  return (
    <Grid item xs={6} md={3}>
      <Card>
        <Carousel
          autoPlay={true}
          animation="slide"
          duration={300}
          navButtonsAlwaysVisible={isMobile}
          className={styles.carousel}
          activeIndicatorIconButtonProps={{ className: styles.indicatorActive }}
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
        <Typography className={styles.h3} variant="h4" component="h3">
          {item.title}
        </Typography>
        <Typography component="p">{item.description}</Typography>
      </Card>
    </Grid>
  )
}
