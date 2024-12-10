import { useSignupMutation } from "../../services/service";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpFormSchema } from "../../schema/authentication";
import { toast } from "react-toastify";
export const useSignupForm = () => {
  const [signUp, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpFormSchema,
    onSubmit: async (values) => {
      const { confirmPassword, ...formData } = values;
      try {
        const response = await signUp(formData);

        if (response.error) {
          toast.error(response.error.data?.message || response?.message);
        } else {
          toast.success(response?.data?.message);
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return { formik, isLoading };
};
