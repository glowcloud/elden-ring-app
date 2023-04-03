import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Box,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";

import {
  StatsStep,
  EquipmentStep,
  SpellsStep,
  ItemsStep,
} from "../../components/Form";
import { CustomBreadcrumbs } from "../../components/UI";

import useCreate from "../../hooks/useCreate";
import useFormFetch from "../../hooks/useFormFetch";

const CreateBuild = () => {
  const [currentClass, setCurrentClass] = useState(-1);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);

  const { handleCreate, isLoading, error } = useCreate();
  const {
    classes,
    items,
    weapons,
    ammos,
    ashes,
    shields,
    talismans,
    incantations,
    sorceries,
    spirits,
    isLoading: isLoadingData,
  } = useFormFetch();

  const navigate = useNavigate();

  const { handleSubmit, control, watch, setValue, getValues } = useForm();
  const watchClass = watch("root.classSelect");

  useEffect(() => {
    if (classes && classes[watchClass]) {
      if (getValues("stats")) {
        setValue("stats", classes[watchClass].stats);
      }
      setCurrentClass(watchClass);
    }
  }, [watchClass]);

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onPrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async (data) => {
    if (
      (!watchClass && watchClass !== 0) ||
      getValues("root.buildName") === ""
    ) {
      setIsError(true);
      return;
    }

    const isCreated = await handleCreate(
      data,
      classes,
      items,
      sorceries,
      incantations,
      ammos,
      weapons,
      shields,
      ashes,
      talismans
    );

    if (isCreated) {
      navigate("/builds");
    }
  };

  return (
    <Box mx={{ sm: 2, md: 10 }} my={2}>
      <CustomBreadcrumbs category="builds" name="Create" />
      <Paper sx={{ p: 2, mt: 1 }}>
        {isLoadingData && (
          <Box
            my={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        )}
        {!isLoadingData && (
          <form autoComplete="off">
            {step === 0 && (
              <StatsStep
                control={control}
                setValue={setValue}
                getValues={getValues}
                classes={classes}
                currentClass={currentClass}
              />
            )}
            {step === 1 && (
              <EquipmentStep
                control={control}
                setValue={setValue}
                getValues={getValues}
                ammos={ammos}
                talismans={talismans}
                weapons={weapons}
                ashes={ashes}
                shields={shields}
              />
            )}
            {step === 2 && (
              <SpellsStep
                control={control}
                setValue={setValue}
                getValues={getValues}
                sorceries={sorceries}
                incantations={incantations}
              />
            )}
            {step === 3 && (
              <ItemsStep
                control={control}
                setValue={setValue}
                getValues={getValues}
                items={items}
                spirits={spirits}
              />
            )}

            {/* ERRORS */}
            {step === 3 && (isError || error) && (
              <Box>
                <Typography align="center" color="error">
                  {error ? error : "Name and class fields are required"}
                </Typography>
              </Box>
            )}

            {/* BUTTONS */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={3}
            >
              {step !== 0 && (
                <Button onClick={onPrevStep} sx={{ mx: 0.5 }}>
                  Back
                </Button>
              )}
              {step !== 3 && (
                <Button
                  variant="outlined"
                  onClick={onNextStep}
                  sx={{ mx: 0.5 }}
                >
                  Next
                </Button>
              )}
              {step === 3 && (
                <Button
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ mx: 0.5 }}
                  disabled={isLoading}
                >
                  Submit
                </Button>
              )}
            </Box>
          </form>
        )}
      </Paper>
    </Box>
  );
};

export default CreateBuild;
