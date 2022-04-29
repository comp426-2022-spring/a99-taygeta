import "../css/Login.css";
import axios from "axios";

function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    const email1 = e.target.email.value;
    axios
      .post("http://localhost:5555/app/email/", { email: email1 })
      .then((res) => {
        console.log(res.data);
        if (res.data == "0") {
          alert(
            "There's no record of this email. Create a new account instead."
          );
          window.location.href = "/register";
        } else {
          alert("We found your email! Let's take you to the dashboard.");
          window.location.href = "/dashboard";
        }
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter Username"
          required
        ></input>

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>

        <button type="submit">Login</button>
        <label>
          <input
            type="checkbox"
            defaultChecked={true}
            name="remember"
            style={{ marginBottom: "15px" }}
          ></input>{" "}
          Remember me
        </label>
      </div>

      <div className="container">
        <button className="cancelbtn">Register</button>
      </div>
    </form>
  );
}

export default Login;
