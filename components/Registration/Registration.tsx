"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
  Box,
} from "@mui/material";
import axios, { AxiosError } from "axios";

const Registration: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [otherSchool, setOtherSchool] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Extract email and password from query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setEmail(urlParams.get("email") || "");
    setPassword(urlParams.get("password") || "");
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      age === "" ||
      !phoneNumber ||
      !country ||
      !state ||
      !city ||
      !university
    ) {
      console.error("Please fill in all required fields.");
      setLoading(false);
      return; // Stop further execution
    }

    try {
      await axios.post("/api/auth/signup", {
        name: `${firstName} ${lastName}`,
        age,
        phoneNumber,
        country,
        state,
        city,
        university: university === "Other" ? otherSchool : university,
        email, // Include email
        password, // Include password
      });

      // Redirect to home page after registration
      window.location.href = "/";
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(
        "Registration error:",
        axiosError.response?.data || axiosError.message || error
      );
      // Redirect to home page even if there's an error
      window.location.href = "/";
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ mt: 4, mb: 4, width: "60%", maxWidth: "600px" }}
    >
      <div className="mainPage">
        <Typography variant="h4" align="center" gutterBottom>
          Registration
        </Typography>
        <form className="formContainer" onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{
                width: "300px",
                mr: 1,
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  { borderColor: "orange" },
              }}
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              InputProps={{
                onFocus: (e) => {
                  e.target.style.borderColor = "orange";
                },
                onBlur: (e) => {
                  e.target.style.borderColor = "";
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              sx={{
                width: "300px",
                ml: 1,
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  { borderColor: "orange" },
              }}
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              InputProps={{
                onFocus: (e) => {
                  e.target.style.borderColor = "orange";
                },
                onBlur: (e) => {
                  e.target.style.borderColor = "";
                },
              }}
            />
          </Box>

          <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="number"
              sx={{
                width: "300px",
                mr: 1,
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  { borderColor: "orange" },
              }}
              label="Age"
              onChange={(e) => setAge(Number(e.target.value))}
              inputProps={{ min: 0, max: 100 }}
              InputProps={{
                onFocus: (e) => {
                  e.target.style.borderColor = "orange";
                },
                onBlur: (e) => {
                  e.target.style.borderColor = "";
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Phone Number"
              sx={{
                width: "300px",
                ml: 1,
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  { borderColor: "orange" },
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
              inputProps={{ maxLength: 11 }}
              InputProps={{
                onFocus: (e) => {
                  e.target.style.borderColor = "orange";
                },
                onBlur: (e) => {
                  e.target.style.borderColor = "";
                },
              }}
            />
          </Box>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Country</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
            >
              <MenuItem value="" disabled>
                Select Country
              </MenuItem>
              <MenuItem value="Country1">Country1</MenuItem>
              <MenuItem value="Country2">Country2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>State</InputLabel>
            <Select
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State"
            >
              <MenuItem value="" disabled>
                Select State
              </MenuItem>
              <MenuItem value="State1">State1</MenuItem>
              <MenuItem value="State2">State2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>City</InputLabel>
            <Select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City"
            >
              <MenuItem value="" disabled>
                Select City
              </MenuItem>
              <MenuItem value="City1">City1</MenuItem>
              <MenuItem value="City2">City2</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>University</InputLabel>
            <Select
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              label="University"
            >
              <MenuItem value="" disabled>
                Select University
              </MenuItem>
              <MenuItem value="University1">University1</MenuItem>
              <MenuItem value="University2">University2</MenuItem>
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="Other">* Other</MenuItem>
            </Select>
          </FormControl>

          {university === "Other" && (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Other University"
              onChange={(e) => setOtherSchool(e.target.value)}
            />
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ marginTop: 3 }}
          >
            {loading ? <CircularProgress size={24} /> : "Register"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Registration;
