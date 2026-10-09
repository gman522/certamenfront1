
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./../styles/WarriorTable.css";

function WarriorTable({ warriors, onDeleteWarrior }) {
  return (
    <Card>
      <CardHeader title="Despliegue del Ejército" />

      <CardContent>
        {warriors.length === 0 ? (
          <Typography color="text.secondary">
            No hay guerreros registrados.
          </Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre del Guerrero</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Categoría / Rango</TableCell>
                  <TableCell align="center">Nivel</TableCell>
                  <TableCell>Clasificación</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {warriors.map((warrior) => (
                  <TableRow key={warrior.id}>
                    <TableCell>{warrior.name}</TableCell>
                    <TableCell>{warrior.type}</TableCell>
                    <TableCell>{warrior.rank}</TableCell>
                    <TableCell align="center">
                      {warrior.level}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={warrior.type}
                        color={warrior.type === "Orco" ? "success" : "error"}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => onDeleteWarrior(warrior.id)}
                      >
                        Asesinado por la aparición
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default WarriorTable;
