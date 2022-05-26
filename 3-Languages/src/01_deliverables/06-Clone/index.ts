console.log(
  "==== Deliverables  =========== 06-Clone === Start ======================="
);

const sourceObject = { name: "Maria", surname: "Ibañez", country: "SPA" };
const clone = <A extends Object>(input: A) => ({
  ...input,
});

const targetObject = clone(sourceObject);
targetObject.name = 'Andy';
targetObject.surname = 'Rosete';
console.log('Source Object ===>', sourceObject);
console.log('Target Object ===>', targetObject);
console.log(
  "==== Deliverables  =========== 06-Clone === End =======================\n\n\n"
);
