import * as React from 'react';
import {
    Tooltip,
    IconButton
} from '@mui/material';

const MuiTooltip = (props) => {
    const IconProp = props.icon;
    return (
        <Tooltip 
        title={props.title}
        arrow
        enterDelay={500}
        leaveDelay={200}>
            <IconButton>
                <IconProp />
            </IconButton>
        </Tooltip>
    )
}

export default React.memo(MuiTooltip);