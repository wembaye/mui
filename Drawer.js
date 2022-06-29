import * as React from 'react';
import {
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Divider,
    Box,
} from '@mui/material';
import { useNavigate} from 'react-router-dom'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
const drawerWidth = 240;

const DrawerComponent = (props) => {
    const [open, setOpen] = React.useState(false);
   const navigate = useNavigate();
    const handleClick = () => {
      setOpen(!open);
    };
    const tableProHandler = () =>{
      navigate('/tablePro')
    }
    const tableHandler = () =>{
      navigate('/')
    }
   const list = [];
    return (
        <Box classes={{ display: 'flex' }}>
         { list? <Drawer
                variant='permanent'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                anchor='left'
                classes={{ paper: '240' }}
            >
                <div>
                    <Typography variant='h5'>
                    
                    </Typography>
                </div>

                <Toolbar />
                <Divider />
                <List>
                
                    {list.map((text, index) => (
                        <div key={text + index} >
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                             <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="ItemOne" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="ItemTwo" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="ItemThree" />
                      </ListItemButton>
                    </List>
                  </Collapse>  
                        </div>
                    ))}

                    <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={tableProHandler}>
                        <ListItemIcon>
                        <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="ItemOne" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }} onClick={tableHandler}>
                        <ListItemIcon>
                        <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="ItemTwo" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="ItemThree" />
                      </ListItemButton>
                    </List>
                  </Collapse>  
                </List> 
                             
            </Drawer>: null}
        </Box>
    )
}

export default DrawerComponent;