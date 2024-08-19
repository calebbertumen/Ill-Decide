import React from "react";

import {
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

const MAX = 20;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

function Home() {
  const [value, setValue] = React.useState<number | null>(2);

  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          px: "30%",
          py: "3%",
          bgcolor: "white",
        }}
      >
        {/* Input Section */}
        <Paper
          elevation={5}
          sx={{
            borderRadius: "10px",
            border: 1,
            px: 10,
            py: 2,
          }}
        >
          <Grid container rowSpacing={3} columnSpacing={2}>
            {/* Specifications Header */}
            <Grid item xs={12}>
              <Typography textAlign={"center"} variant="h6">
                Specifications
              </Typography>
            </Grid>

            {/* Type of Food */}
            <Grid item xs={6}>
              <Typography align="right"> Type of food:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                hiddenLabel
                id="food type"
                variant="filled"
                size="small"
              />
            </Grid>

            {/* Price Range */}
            <Grid item xs={6}>
              <Typography align="right">Price Range:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                hiddenLabel
                id="price range"
                variant="filled"
                size="small"
              />
            </Grid>

            {/* Distance from current location */}
            <Grid item xs={6}>
              <Typography align="right">
                Distance (from current location):
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Slider
                  marks={marks}
                  step={1}
                  value={val}
                  valueLabelDisplay="auto"
                  min={MIN}
                  max={MAX}
                  onChange={handleChange}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(MIN)}
                    sx={{ cursor: "pointer" }}
                  >
                    {MIN} miles
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(MAX)}
                    sx={{ cursor: "pointer" }}
                  >
                    {MAX}+ miles
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Avg Rating */}
            <Grid item xs={6}>
              <Typography align="right"> Avg Rating:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>

            {/* Decide Button */}
            <Grid item xs={12} sx={{ py: 4 }}>
              <Box textAlign="center">
                <Button variant="contained" href="#contained-buttons">
                  Decide for me
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default Home;
