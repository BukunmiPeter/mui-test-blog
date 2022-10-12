import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },
});

// import { Button, styled } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { Add } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import { Typography } from "@mui/material";
// function App() {
//   const BlueButton = styled(Button)({
//     backgroundColor: "skyblue",
//     color: "#888",
//     margin: 5,
//     "&:hover": {
//       backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//       backgroundColor: "gray",
//       color: "white",
//     },
//   });
//   return (
//     <div>
//       <Button variant="text">Text</Button>
//       <Button
//         startIcon={<SettingsIcon />}
//         variant="contained"
//         color="secondary"
//         size="small"
//       >
//         Settings
//       </Button>
//       <Button startIcon={<Add />} variant="contained" disabled color="success">
//         Add Post
//       </Button>
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <Button variant="contained" color="success" endIcon={<SendIcon />}>
//         Send
//       </Button>
//       <Typography variant="h1" component="p">
//         h1. Heading, h1 style but p tag
//       </Typography>

//       <BlueButton>My Blue Button</BlueButton>
//       <BlueButton>one more Button</BlueButton>
//     </div>
//   );
// }

// export default App;
