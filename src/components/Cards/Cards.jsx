import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ParcelaImage from '../../assets/Parcela.webp';
import EdificioImage from '../../assets/Edificio.jpg';
import Ubicacion from '../../markers/Ubicacion.jsx';

export default function MediaControlCard({info}) {
  let imageSource = info.tipo === 'Parcela' ? ParcelaImage : EdificioImage;
  const theme = useTheme();

  return (
    <Card sx={{display: 'flex'}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
        <Typography style={{whiteSpace: 'nowrap'}} variant="subtitle3" gutterBottom>
            {info.entrega[0]}
          </Typography>
          <Typography style={{whiteSpace: 'nowrap'}} variant="h6" gutterBottom>
            {info.title}
          </Typography>
          <Typography style={{whiteSpace: 'nowrap'}} variant="subtitle3" color="text.secondary" component="div">
            <Ubicacion />
            {info.ubicacion}
          </Typography>
          <Typography variant="subtitle3" color="text.secondary" component="div">
            {info.tipo}
          </Typography>
          <Typography variant="subtitle3" color="text.secondary" component="div">
            {info.price}
          </Typography>
          <Typography variant="subtitle3" color="text.secondary" component="div">
            {info.tamaño}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{width: 160}}
        image={imageSource}
        alt="Live from space album cover"
      />
    </Card>
  );
}
