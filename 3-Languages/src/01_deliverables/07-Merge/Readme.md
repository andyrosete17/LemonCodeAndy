# Módulo 2 Lenguajes

## Ejercicios entregables

### 3. Clone Merge
#### Merge

Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

Por ejemplo, dados estos 2 objetos:

```js
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
```

el resultado de mezclar `a` sobre `b` sería:

```js
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
```

TIP: Puedes usar la función "clone" del apartado A.

```js
function merge(source, target) {
  // Implementation here.
}
```

# Importante

En el caso del merge se ha utilizado genericos aplicando la funcionalidad de intersection. Se declaran variables genericas indicando que extienden del tipo de datos de objectos y de esta manera se hace posible que acepte cualquier tipo de objecto y además sobreescribe las propiedades que estén repetidas

```js
// A and B are generic variables extending object
const merge = <A extends Object, B extends Object>(
  source: A,
  target: B
): A & B => ({  //The syntax A & B represent the intersection
  ...source,
  ...target,
});
```
