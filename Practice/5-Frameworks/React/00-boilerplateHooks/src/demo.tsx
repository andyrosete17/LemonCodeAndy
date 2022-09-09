import React, {
  useState,
  memo,
  useMemo,
  useCallback,
  createContext,
} from "react";
import { AnotherComponent } from "./another-component";
import { EditUser } from "./edit-user";
import { LoggedUser } from "./logged-user";
import { useGetUsersFiltered } from "./use-users-filtered";

// export const Demo = () => {
//   const { list, filter, setFilter } = useGetUsersFiltered();
//   return (
//     <div>
//       <input value={filter} onChange={(e) => setFilter(e.target.value)} />
//       <ul>
//         {list.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Memo guarda el estado en una cache, y si llamas a la funcion con el mismo estado, no se ejecuta nada

// interface Props {
//     user: {
//       name: string;
//       lastname: string;
//     };
//   }

//   const DisplayUsername = React.memo((props: Props) => {
//     const { user } = props;

//     console.log("Hey! Render de display user name: ", user);

//     return (
//       <div>
//         {user.name} {user.lastname}
//       </div>
//     );
//   });

//   export const Demo = () => {
//     const [user, setUser] = React.useState({
//       name: "John",
//       lastname: "Doe",
//     });

//     const [address, setAddress] = React.useState("");

//     return (
//       <>
//         <DisplayUsername user={user} />
//         <input
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//         />
//         <input
//           value={user.lastname}
//           onChange={(e) => setUser({ ...user, lastname: e.target.value })}
//         />
//         <input value={address} onChange={(e) => setAddress(e.target.value)} />
//       </>
//     );
//   };

// interface Props {
//   user: {
//     name: string;
//     lastname: string;
//   };
//   onReset: () => void;
// }

// const DisplayUsername = React.memo((props: Props) => {
//   const { user, onReset } = props;

//   console.log("Hey! Render de display user name: ", user);

//   return (
//     <div>
//       {user.name} {user.lastname}
//       <button onClick={() => onReset()}>Reset Address</button>
//     </div>
//   );
// });

// export const Demo = () => {
//   const [name, setName] = useState("John");
//   const [lastname, setLastname] = useState("Doe");

//   const [address, setAddress] = useState("");

//   // use memo almacena en cacche el estado, y si llamas a la funcion con el mismo estado, no se ejecuta nada
//   const user = useMemo(() => {
//     return {
//       name,
//       lastname,
//     };
//   }, [name, lastname]);

//   // useCallback almacena en cache la funcion, y si llamas a la funcion con el mismo estado, no se ejecuta nada
//   const handleReset = useCallback(() => {
//     setName("");
//     setLastname("");
//   }, []);

//   return (
//     <>
//       <DisplayUsername user={user} onReset={handleReset} />
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
//       <input value={address} onChange={(e) => setAddress(e.target.value)} />
//     </>
//   );
// };

interface IContext {
  username: string;
  setUsername: (value: string) => void;
}

// 1- Creas contexto
export const MyContext = createContext<IContext>({
  username: "Test andy",
  setUsername: (value: string) => {
    console.log(
      "Se te ha olvidado meter el provider en tu jerarquia del componente"
    );
  },
});

// 2- Creas provider e inicializas el contexto
const MyContextProvider = (props: any) => {
  const { children } = props;
  const [username, setUsername] = useState("Jhon");
  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {children}
    </MyContext.Provider>
  );
};

export const Demo = () => {
  return (
    // Metes el provider en el componente que quieras usar
    <>
      <MyContextProvider>
        <LoggedUser />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          repudiandae dolorum, corrupti sed earum quasi, officiis, consectetur
          corporis commodi tempora id quis? Labore explicabo consequatur vel
          ipsam, voluptatibus sit fugit? At tenetur laboriosam adipisci
          necessitatibus quidem doloribus a! Perferendis sed harum quisquam quod
          quam magni accusantium molestiae dolorem dolores delectus nam, veniam
          cumque, quibusdam sequi voluptatibus est. Doloribus, quidem ad.
        </p>
        <EditUser />
      </MyContextProvider>
      <AnotherComponent />
    </>
  );
};
