console.log(
  "==== Deliverables  =========== 07-Merge === Start ======================="
);

const merge = <A extends Object, B extends Object>(
  source: A,
  target: B
): A & B => ({
  ...source,
  ...target,
});

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const c = merge(a, b);

console.log("Source object", a);
console.log("Target object", b);
console.log("Merged objects", c);
console.log(
  "==== Deliverables  =========== 07-Merge === End ======================= \n\n\n"
);
