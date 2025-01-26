import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Alert,
} from "@mui/material";
import NavBar from "../components/NavBar";
// No need to import @mui/styles or makeStyles anymore

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus({
        success: true,
        error: false,
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setFormStatus({
        success: false,
        error: true,
      });
    }
  };
  if (formStatus.success == true) {
    setTimeout(() => setFormStatus(() => !setFormData.success), 3000);
  }

  return (
    <>
      <NavBar />
      <Container sx={{ backgroundColor: "#f5f5f5", padding: 6 , mt:8}}>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#3f51b5", marginBottom: 4 }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We’d love to hear from you! Please reach out with any questions,
          comments, or feedback.
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <Paper
              sx={{
                backgroundColor: "#ffffff",
                padding: 4,
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#3f51b5", color: "#fff" }}
                >
                  Send Message
                </Button>
              </form>

              {formStatus.success && (
                <Alert severity="success" sx={{ marginTop: 3 }}>
                  Your message has been sent successfully!
                </Alert>
              )}
              {formStatus.error && (
                <Alert severity="error" sx={{ marginTop: 3 }}>
                  Please fill in all fields before submitting.
                </Alert>
              )}
            </Paper>
          </Grid>
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="h5" color="primary" gutterBottom>
            Or reach us at:
          </Typography>
          <Typography variant="body1">
            Email: <a href="mailto:contact@company.com">contact@company.com</a>
          </Typography>
          <Typography variant="body1">Phone: +1 (123) 456-7890</Typography>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
