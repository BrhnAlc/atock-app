
import { Avatar, Container, Grid, Typography, Box, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from 'yup';
import image from "../assets/result.svg";
import useAuthCall from "../hooks/useAuthCall"




const Login = () => {
  const {login} = useAuthCall()
  const navigate = useNavigate("/");
  
  // Harici validasyon şeması
  // Bu kod bir form doğrulama şemasını tanımlar. yup paketinin object() ve string() fonksiyonları kullanılarak bir doğrulama şeması oluşturulmuştur.

  const loginSchema = object().shape({
    email: string()
    .email("Please enter a valid email")
    .required("Email field is required"),
    password: string()
    .required("Password field is required")
    .min(8,"At least 8 characters must be entered")
    .max(16,"Maximum 16 characters must be entered")
    .matches(/\d+/,"Must contain at least one digit")
    .matches(/[A-Z]/,"Must contain at least one uppercase letter")
  });
  
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon sx={{fontSize:30}}  />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>
          <Formik 
          
           // ! initialValues: Formun başlangıç değerlerini belirtir. Bu, formdaki alanların başlangıç değerlerini tanımlar.

          // validationSchema: Formdaki alanların doğrulanmasını sağlar. Bu, formun gönderilmeden önce belirli doğrulama kurallarını kontrol eder
          
          //! Aşağıdaki örnekte, form gönderildikten sonra formun sıfırlanması (action.resetForm()) ve gönderim durumunun (action.setSubmitting(false)) güncellenmesi sağlanmıştır.

            initialValues={{email:"", password:""}}
            validationSchema={loginSchema}
            onSubmit={(values,{resetForm, setSubmitting}) => {
              // TODO: login(values) POST işlemi
              login(values,navigate)
              resetForm();
              setSubmitting(false);
            }}
          >
            {({handleChange, handleBlur, values, touched, errors, isSubmitting}) => (
              <Form>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="filled"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button variant="contained" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register"> Don't have an account? Sign up</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;



//  {resetForm, setSubmitting}