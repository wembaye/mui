import * as React from 'react';

import NavBarComponent from './NavBar';
import DrawerComponent from './Drawer';
import { DrawerInfo} from '../../constants/constants'
import { Box } from '@mui/material';
const MainComponent = () => {
    return (
        <Box flex={1}>
        <DrawerComponent list={DrawerInfo.list}/>
         <NavBarComponent/>
        </Box>
    )
}

export default MainComponent;