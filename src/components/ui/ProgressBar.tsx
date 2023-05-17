import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#FAFAFA',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#8635F7' : '#8635F7',
    },
}));


export default function ProgressBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <br />
            <BorderLinearProgress variant="determinate" value={70} />
        </Box>
    );
}
