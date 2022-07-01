import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Airbus from "../assets/AIRBUS.png";
import Levis from "../assets/LEVIS.png";
import Hyundai from "../assets/HYUNDAI.png";
import Champion from "../assets/CHAMPION.png";
import Epson from "../assets/EPSON.png";

function createData(picture, jointprojects, stacks, agency, contact) {
  return {
    picture,
    jointprojects,
    stacks,
    agency,
    contact,
  };
}

const rows = [
  createData({
    id: 1,
    picture: Airbus,
    name: "Airbus",
    jointprojects: "Aeronautics",
    agency: "Toulouse",
    contact: "airbus@contact.com",
  }),
  createData({
    id: 2,
    picture: Levis,
    name: "Levis",
    jointprojects: "Textile",
    agency: "Lyon",
    contact: "levis@contact.com",
  }),
  createData({
    id: 3,
    picture: Hyundai,
    name: "Hyundai",
    jointprojects: "Automotive",
    agency: "Paris",
    contact: "hyundai@contact.com",
  }),
  createData({
    id: 4,
    picture: Champion,
    name: "Champion",
    jointprojects: "Textile",
    agency: "Toulouse",
    contact: "champion@contact.com",
  }),
  createData({
    id: 5,
    picture: Epson,
    name: "Epson",
    jointprojects: "Electronic",
    agency: "Toulouse",
    contact: "epson@contact.com",
  }),
];

function ArrayCustomers() {
  return (
    <TableContainer component={Paper} sx={{ width: 1200 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ width: 0, fontSize: 18, fontWeight: 700, color: "#616161" }}
            >
              Collaborators
            </TableCell>
            <TableCell sx={{ width: 200 }} />
            <TableCell
              sx={{ fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              Categories
            </TableCell>
            <TableCell
              sx={{ fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              City
            </TableCell>
            <TableCell
              sx={{ width: 0, fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              Contact
            </TableCell>
            <TableCell sx={{ width: 0 }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.picture.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontWeight: 700 }}
                align="center"
              >
                <img src={row.picture.picture} alt="" />
              </TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }} align="center">
                {row.picture.name}
              </TableCell>
              <TableCell align="center">{row.picture.jointprojects}</TableCell>
              <TableCell align="center">{row.picture.agency}</TableCell>
              <TableCell align="center">{row.picture.contact}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  endIcon={<ListAltIcon />}
                >
                  PROJECTS
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ArrayCustomers;
