
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Typography,
} from "@mui/material";
import "./../styles/WarriorForm.css";

function WarriorForm({ onAddWarrior }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Orco");
  const [level, setLevel] = useState(50);
  const [rank, setRank] = useState("Capitán");
  const [threat, setThreat] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddWarrior({
      name,
      type,
      level,
      rank,
      threat,
    });

    setName("");
    setType("Orco");
    setLevel(50);
    setRank("Capitán");
    setThreat(1);
  };

  return (
    <Card>
      <CardHeader title="Ingresar Guerrero" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <TextField
                label="Nombre del Guerrero"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
              />
            </div>

            <div className="col-12 col-md-6">
              <FormControl>
                <FormLabel>Tipo de Guerrero</FormLabel>
                <RadioGroup
                  row
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <FormControlLabel
                    value="Orco"
                    control={<Radio />}
                    label="Orco"
                  />
                  <FormControlLabel
                    value="Uruk"
                    control={<Radio />}
                    label="Uruk"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="col-12 col-md-6">
              <Typography gutterBottom>
                Nivel de Combate: {level}
              </Typography>
              <Slider
                value={level}
                onChange={(_, newValue) => setLevel(newValue)}
                min={1}
                max={100}
                step={1}
                valueLabelDisplay="auto"
              />
            </div>

            <div className="col-12 col-md-6">
              <FormControl fullWidth>
                <InputLabel id="rank-label">Categoría / Rango</InputLabel>
                <Select
                  labelId="rank-label"
                  label="Categoría / Rango"
                  value={rank}
                  onChange={(event) => setRank(event.target.value)}
                >
                  <MenuItem value="Capitán">Capitán</MenuItem>
                  <MenuItem value="Berserker">Berserker</MenuItem>
                  <MenuItem value="Explorador">Explorador</MenuItem>
                  <MenuItem value="Asediador">Asediador</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-12">
              <Typography component="legend">
                Nivel de Amenaza / Furia
              </Typography>
              <Rating
                value={threat}
                onChange={(_, newValue) => {
                  if (newValue !== null) setThreat(newValue);
                }}
                max={5}
              />
            </div>

            <div className="col-12">
              <Button type="submit" variant="contained">
                Registrar Guerrero
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default WarriorForm;
