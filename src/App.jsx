import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import ReviewSubmit from "./components/ReviewSubmit";
import ProgressBar from "./components/ProgressBar";
import Dashboard from "./components/Dashboard";

import "./App.css";

const personalSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
});

const accountSchema = z
  .object({
    email: z
      .string()
      .email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load saved profile when application starts
  useEffect(() => {
    const savedUser = localStorage.getItem("prodeskUser");

    if (savedUser) {
      setFormData(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const currentSchema =
    step === 1 ? personalSchema : accountSchema;

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(currentSchema),
    defaultValues: formData,
  });

  // Move to next step
  const handleNext = async () => {
    const isValid = await trigger();

    if (!isValid) return;

    const currentData = getValues();

    const updatedData = {
      ...formData,
      ...currentData,
    };

    setFormData(updatedData);

    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Go back
  const handleBack = () => {
    const currentData = getValues();

    setFormData((previous) => ({
      ...previous,
      ...currentData,
    }));

    setStep(step - 1);
  };

  // Final submission
  const handleFinalSubmit = (data) => {
    const finalData = {
      ...formData,
      ...data,
    };

    console.log("FINAL SUBMISSION:", finalData);

    // Save profile in browser
    localStorage.setItem(
      "prodeskUser",
      JSON.stringify(finalData)
    );

    setFormData(finalData);
    setIsLoggedIn(true);
  };

  // Edit profile
  const handleEdit = () => {
    reset(formData);
    setStep(1);
    setIsLoggedIn(false);
  };

  // Logout / clear profile
  const handleLogout = () => {
    localStorage.removeItem("prodeskUser");

    setFormData({});
    setIsLoggedIn(false);
    setStep(1);

    reset({});
  };

  // Existing user dashboard
  if (isLoggedIn) {
    return (
      <Dashboard
        formData={formData}
        onEdit={handleEdit}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="app-container">
      <div className="onboarding-card">

        <div className="header">
          <div className="brand">
            <div className="brand-logo">O</div>
            <span>Onboardly</span>
          </div>

          <p className="small-title">
            PROFILE SETUP
          </p>

          <h1>Create Your Profile</h1>

          <p className="subtitle">
            Complete your profile to get started with
            Prodesk IT.
          </p>
        </div>

        <ProgressBar step={step} />

        <div className="step-label">
          Step {step} of 3
        </div>

        <form onSubmit={handleSubmit(handleFinalSubmit)}>

          {step === 1 && (
            <PersonalInfo
              register={register}
              errors={errors}
              onNext={handleNext}
            />
          )}

          {step === 2 && (
            <AccountDetails
              register={register}
              errors={errors}
              onBack={handleBack}
              onNext={handleNext}
            />
          )}

          {step === 3 && (
            <ReviewSubmit
              formData={formData}
              onBack={handleBack}
            />
          )}

        </form>

      </div>
    </div>
  );
}

export default App;