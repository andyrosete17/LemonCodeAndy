import React from "react";

interface Props {
  name: string;
  dispatch: React.Dispatch<Action>;
}

const EditUsername: React.FC<Props> = React.memo((props) => {
  console.log(
    "Hey I'm only rerendered when name gets updated, check React.memo"
  );

  return (
    <input
      value={props.name}
      onChange={(e) =>
        props.dispatch({
          type: actionIds.SET_NAME,
          payload: e.target.value,
        })
      }
    />
  );
});

interface UserState {
  name: string;
  lastname: string;
}

interface Action {
  type: string;
  payload: any;
}

const actionIds = {
  SET_NAME: "SET_NAME",
  SET_LASTNAME: "SET_LASTNAME",
};

const userInfoReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case actionIds.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case actionIds.SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
      };

    default:
      return state;
  }
};

export const Demo = () => {
  const [userInfo, dispatch] = React.useReducer(userInfoReducer, {
    name: "John",
    lastname: "Doe",
  });

  return (
    <>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <EditUsername name={userInfo.name} dispatch={dispatch} />
      <input
        value={userInfo.lastname}
        onChange={(e) =>
          dispatch({
            type: actionIds.SET_LASTNAME,
            payload: e.target.value,
          })
        }
      />
    </>
  );
};
