console.log(
  "==== Deliverables  =========== 08-ReadBooks === Start ======================="
);

interface IBooks {
  title: string;
  isRead: boolean;
}
const books: IBooks[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (booksArray: IBooks[], titleToSearch: string): boolean =>
  booksArray.find((x) => x.title === titleToSearch)?.isRead ?? false;

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log(
  "==== Deliverables  =========== 08-ReadBooks === End ======================= \n\n\n"
);
