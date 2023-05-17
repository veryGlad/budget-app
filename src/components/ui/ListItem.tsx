import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Box, Typography } from '@mui/material';
import ProgressBar from './ProgressBar';

export default function FolderList() {
  return (
    <Box>
      <List sx={{ width: 360, bgcolor: '#FAFAFA', borderRadius: '10px' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-between'}
            >
              <Box>
                <Typography variant={'subtitle1'}>Nike super store</Typography>
              </Box>
              <Box>
                <Typography variant={'caption'} color={'#A3A3A3'}>
                  Bank account
                </Typography>
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'flex-end'}
            >
              <Box>
                <Typography variant={'subtitle1'} color={'#2BB272'}>
                  $475
                </Typography>
              </Box>
              <Box>
                <Typography variant={'caption'} color={'#A3A3A3'}>
                  Fri, 05 April 2022
                </Typography>
              </Box>
            </Box>
          </Box>
        </ListItem>
      </List>
      <Box margin={3}></Box>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////*/}
      <List sx={{ width: 360, bgcolor: '#FAFAFA', borderRadius: '10px' }}>
        <ListItem>
          <Box display={'flex'} flexDirection={'column'} width={'100%'}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              width={'100%'}
            >
              <Box display={'flex'} alignItems={'flex-start'}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  marginTop={'-5px'}
                >
                  <Typography variant={'subtitle1'}>
                    Nike super store
                  </Typography>
                  <Typography variant={'caption'} color={'#A3A3A3'}>
                    Bank account
                  </Typography>
                </Box>
              </Box>
              <Typography variant={'caption'} color={'#A3A3A3'}>
                Fri, 05 April 2022
              </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} marginTop={'12px'}>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'}>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    marginRight={'24px'}
                  >
                    <Typography variant={'subtitle1'} color={'#615C5C'}>
                      Total spend
                    </Typography>
                    <Typography
                      variant={'subtitle1'}
                      color={'#2BB272'}
                      marginTop={'8px'}
                    >
                      $2,486
                    </Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Typography variant={'subtitle1'} color={'#615C5C'}>
                      Total spend
                    </Typography>
                    <Typography variant={'subtitle1'} marginTop={'8px'}>
                      $3,000
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'flex-end'}
                >
                  <Typography variant={'subtitle1'} color={'#2BB272'}>
                    75.78%
                  </Typography>
                </Box>
              </Box>
              <Box>
                <ProgressBar />
              </Box>
            </Box>
            <Box></Box>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
