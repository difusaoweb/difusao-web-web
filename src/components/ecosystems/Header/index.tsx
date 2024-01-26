'use client'
import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  Link
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Image from 'next/image'

import styles from './index.module.scss'

export const HeaderBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const pages = [
    ['services', 'Soluções'],
    ['cases', 'Cases'],
    ['clients', 'Clientes'],
    ['about', 'Sobre'],
    ['contact', 'Contato']
  ]

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget)
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null)
  }

  return (
    <>
      <AppBar className={styles.header}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className={styles.divLogo}>
              <a href="/">
                <Image
                  src="/header/logo-difusao-web.png"
                  alt="Difusão Web logo"
                  width={162}
                  height={46}
                />
              </a>
            </Box>
            <Box className={styles.divMenuMobile}>
              <IconButton
                size="large"
                aria-label="Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                className={styles.iconMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                className={styles.menu}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link className={styles.a} href={`#${page[0]}`}>
                      {page[1]}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box className={styles.divMenuDesktop}>
              {pages.map((page, index) => (
                <Button key={index} href={`#${page[0]}`} className={styles.a}>
                  {page[1]}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
