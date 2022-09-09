import React from "react";

export const Demo = () => {
  const [cont, setCont] = React.useState(0);
  const [id, setId] = React.useState(0);
  const nameRef = React.useRef({
    firstname: "John",
    lastname: "Doe",
  });

  nameRef.current = React.useMemo(
    () => ({
      firstname: "John",
      lastname: "Doe",
    }),
    []
  );

  return (
    <>
      <div>
        <MyChildComponent name={nameRef.current} cont={cont} />
        <button onClick={() => setCont(cont + 1)}>Increment cont</button>
      </div>
      <div>
        <div>id: {id}</div>
        <button onClick={() => setId(id + 1)}>Increment Id</button>
      </div>
    </>
  );
};

interface Props {
  name: {
    firstname: string;
    lastname: string;
  };
  cont: number;
}

const MyChildComponent = React.memo((props: Props) => {
  console.log("Render");
  useWhyDidYouUpdate("Berenjena", props);

  return (
    <div style={{ border: "2px solid black" }}>
      {props.name.firstname} {props.name.lastname} cont: {props.cont}
    </div>
  );
});

// Hook
function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = React.useRef();

  React.useEffect(() => {
    if (previousProps.current) {
      console.log(previousProps.current);
      // Get all keys from previous and current props
      const allKeys = Object.keys({
        ...(previousProps.current as any),
        ...props,
      });

      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach((key) => {
        // If previous is different from current
        if (
          previousProps &&
          previousProps.current &&
          previousProps.current[key] !== props[key]
        ) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}
