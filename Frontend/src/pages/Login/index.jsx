import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Authentication from "../../layout/authentication/Authentication";
import logo from "../../assets/logo.svg";
import { TextInput, Loader } from "../../components";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { useLoginForm } from "./useLoginForm";
import "./style.css";

const Login = () => {
  const { formik, isLoading } = useLoginForm();

  return (
    <>
      {isLoading && <Loader />}
      <Container fluid className="login-container">
        <Row>
          <Col lg={6} className="overflow-auto vh-100">
            <div className="px-2 py-5 login-form m-auto">
              <img src={logo} alt="logo" />
              <h1 className="font-dm-serif m-0 mt-2 fs-2">Login an Account</h1>
              <p className="opacity-50 pe-0 pe-lg-5">
                Enter your details and begin your journey to unforgettable destinations.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex gap-4 flex-column mt-4">
                  <TextInput
                    name="email"
                    placeholder="Enter your email"
                    formik={formik}
                    icon={<MdOutlineMail className="opacity-50" size={16} />}
                  />
                  <div>
                    <TextInput
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      formik={formik}
                      toggleIcon={true}
                    />
                    <div className="d-flex justify-content-end">
                      <Link to="/forgotPassword" className="mt-2 text-dark fw-medium text-decoration-none">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="p-2 primary-color-bg text-light fw-bold rounded-2 border-0"
                  >
                    Login
                  </button>
                  <div className="divider d-flex justify-content-center align-items-center">
                    <span>or login with</span>
                  </div>

                  <div>
                    <button className="border rounded-2 p-2 bg-transparent fw-bold w-100">
                      <FcGoogle size={20} /> Google
                    </button>
                    <p className="text-center text-secondary mt-2 ">
                      Don’t have an account?{" "}
                      <Link to="/signUp">
                        <button className="fw-bold border-0 bg-transparent text-dark">
                          Sign Up
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={6} className="p-0 d-none d-lg-block">
            <Authentication />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;
