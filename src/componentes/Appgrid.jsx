import { useState } from 'react'
import {
  Container,
  TextField,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Rating,
  Checkbox,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'

export default function AppGrid() {
  const [data, setData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    edad: '',
    modalidad: '',
    lenguaje: '',
    interes: 0,
    condiciones: false,
  })

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleModalidadChange = (e) => {
    setData({ ...data, modalidad: e.target.value })
  }

  const handleSelectChange = (e) => {
    setData({ ...data, lenguaje: e.target.value })
  }

  const handleRatingChange = (e, newValue) => {
    setData({ ...data, interes: newValue || 0 })
  }

  const handleCheckboxChange = (e) => {
    setData({ ...data, condiciones: e.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    setDialogOpen(true)
  }

  const handleClear = () => {
    setData({
      nombre: '',
      apellidos: '',
      correo: '',
      edad: '',
      modalidad: '',
      lenguaje: '',
      interes: 0,
      condiciones: false,
    })
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  return (
    <Container component="main" maxWidth="sm"  sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Formulario de Encuesta
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Nombre"
              name="nombre"
              value={data.nombre}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Apellidos"
              name="apellidos"
              value={data.apellidos}
              onChange={handleChange}
            />
          </Grid>

        <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="email"
              label="correo"
              name="correo"
              value={data.correo}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="number"
              label="edad"
              name="edad"
              value={data.edad}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Modalidad</Typography>
            <RadioGroup
              row
              name="modalidad"
              value={data.modalidad}
              onChange={handleModalidadChange}
            >
              <FormControlLabel value="presencial" control={<Radio required />} label="Presencial" />
              <FormControlLabel value="online" control={<Radio required />} label="Online" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel id="select-label">Taller elejido</InputLabel>
              <Select
                labelId="select-label"
                value={data.lenguaje}
                label="Taller elejido"
                onChange={handleSelectChange}
              >
                <MenuItem value="Robotica">Robotica</MenuItem>
                <MenuItem value="Realidad Virtual">Realidad Virtual</MenuItem>
                <MenuItem value="Programacion Creativa">Programacion Creativa</MenuItem>
                <MenuItem value="Impresion 3D">Impresion 3D</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Valoración</Typography>
            <Rating
              name="valoracion"
              value={data.interes}
              onChange={handleRatingChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.condiciones}
                  onChange={handleCheckboxChange}
                />
              }
              label="Acepto las condiciones"
            />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="space-between">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!data.condiciones}
            >
              Enviar
            </Button>

            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={handleClear}
            >
              Limpiar
            </Button>
          </Grid>
        </Grid>
      </form>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Deseas enviar los datos del formulario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>No</Button>
          <Button onClick={handleCloseDialog} autoFocus>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
