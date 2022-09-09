import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface InfoForm {
  user: string;
  password: string;
}
export const Login = () => {
  const [infoForm, setInfoForm] = useState<InfoForm>({
    user: "admin",
    password: "test",
  });

  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // peticion api para validar credenciales
    if (infoForm.user === "admin" && infoForm.password === "test") {
      navigate("/list");
    } else {
      alert("Pssssss ... wron user or password; admin/test");
    }
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setInfoForm({ ...infoForm, user: e.target.value });
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setInfoForm({ ...infoForm, password: e.target.value });
  };

  const handleChanceCurry =
    (field: keyof InfoForm) => (e: ChangeEvent<HTMLInputElement>) => {
      setInfoForm({ ...infoForm, [field]: e.target.value });
    };
  // En este caso en el password ponemos el name="password" para poder identificarla
  const handleChance = (e: ChangeEvent<HTMLInputElement>) => {
    setInfoForm({ ...infoForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3>Hello Login!!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={infoForm.user}
          onChange={handleChanceCurry("user")}
        />
        <input
          type="password"
          value={infoForm.password}
          name="password"
          onChange={handleChance}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
