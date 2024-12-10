import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation } from "../../services/service";
import { loginFormSchema } from "../../schema/authentication";

export const useLoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values);

        if (response.error) {
          toast.error(response.error.data?.message || response?.message);
        } else {
          localStorage.setItem("jwtToken", response?.data?.jwtToken);
          toast.success(response?.data?.message);
          navigate("/home");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return { formik, isLoading };
};
