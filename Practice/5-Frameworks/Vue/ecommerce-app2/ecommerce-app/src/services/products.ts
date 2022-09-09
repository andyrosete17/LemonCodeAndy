import type { Product } from "@/types";

export const productService = {
  async get(): Promise<Product[]> {
    // throw new Error();
    // const books = await import("./books.mock.json").then((m) => m.default);
    const books = await fetch("/books.mock.json").then((response) =>
      response.json()
    );
    return books;
  },

  async getProduct(id: Product["id"]): Promise<Product | undefined> {
    return this.get().then((products) =>
      products.find((product) => product.id === id)
    );
  },
};
