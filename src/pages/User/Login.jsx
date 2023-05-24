import { useState } from "react";
import { Button, Box, Paper, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { TextInput } from "../../components/Form";

import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";

const Login = () => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const { login, error: loginError } = useLogin();
  const { signup, error: signupError } = useSignup();

  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoadingSubmit(true);

    let loggedIn;

    if (isLogin) {
      loggedIn = await login(data.email, data.password);
    } else {
      loggedIn = await signup(data.email, data.password);
    }

    if (loggedIn) {
      navigate("/");
    } else {
      setLoadingSubmit(false);
    }
  };

  return (
    <Box mx={{ xs: 2, sm: 2, md: 10 }} my={2}>
      <Paper sx={{ p: 2, mt: 1 }}>
        <form autoComplete="off">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            py={2}
          >
            <Box my={2} width={{ xs: "100%", md: "300px" }}>
              <TextInput
                name="email"
                control={control}
                label="Email"
                defaultValue=""
                required={true}
                type="email"
              />
            </Box>
            <Box my={2} width={{ xs: "100%", md: "300px" }}>
              <TextInput
                name="password"
                control={control}
                label="Password"
                defaultValue=""
                required={true}
                type="password"
              />
            </Box>
          </Box>

          {/* ERRORS */}
          {isLogin && loginError && (
            <Box>
              <Typography align="center" color="error">
                Incorrect email or password
              </Typography>
            </Box>
          )}
          {!isLogin && signupError && (
            <Box>
              <Typography align="center" color="error">
                {signupError}
              </Typography>
            </Box>
          )}

          {/* BUTTON */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={2}
          >
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              sx={{ mx: 0.5 }}
              disabled={loadingSubmit}
            >
              Submit
            </Button>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={2}
          >
            <Typography
              align="center"
              onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
              sx={{
                "&:hover": { textDecoration: "underline", cursor: "pointer" },
              }}
            >
              {isLogin
                ? "Click here to create an account"
                : "Already have an account?"}
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
