console.log(
  "==== Deliverables  =========== 07-Merge === Start ======================="
);

const merge = <A extends Object, B extends Object>(
  source: A,
  target: B
): A & B => ({
  ...target,
  ...source,
});

const source = { name: "Maria", surname: "Ibañez", country: "SPA" };
const target = { name: "Luisa", age: 31, married: true };

const c = merge(source, target);

console.log("Source object", source);
console.log("Target object", target);
console.log("Merged objects", c);
console.log(
  "==== Deliverables  =========== 07-Merge === End ======================= \n\n\n"
);
