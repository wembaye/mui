import * as React from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
    Box,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from 'react'
import SearchComponent from './Search'
import MuiTooltip from './MuiTooltip';

const appBarStyle = {
    minHeight: '60px',
};

const NavBarComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
       <Box flex={1}>
            <AppBar position='static' style={appBarStyle} >
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Stack direction='row' spacing={2}>
                       <SearchComponent/>
                        <MuiTooltip title={"Delete"} icon={DeleteIcon}/>
                        <MuiTooltip title={"Edit"} icon={EditIcon}/>
                        <Button color='inherit'>About</Button>
                        <Button
                            color='inherit'
                            id='resources-button'
                            aria-controls={open ? 'resources-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            endIcon={<KeyboardArrowDownIcon />}
                            onClick={handleClick}>
                            Resources
                        </Button>
                    </Stack>
                    <Menu
                        id='resources-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        MenuListProps={{
                            'aria-labelledby': 'resources-button'
                        }}>
                        <MenuItem onClick={handleClose}>Blog</MenuItem>
                        <MenuItem onClick={handleClose}>Podcast</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default React.memo(NavBarComponent);