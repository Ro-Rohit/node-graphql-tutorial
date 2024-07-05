type productType = {
    id: number,
    name: string,
    description: string,
    price: number
}

class Product {
    private _productList: productType[];

    constructor(productsInput: productType[]) {
        this._productList = productsInput;
    }

    public getProductList(): productType[] {
        return [{ id: 111, name: "vcv", description: "vcvbvb", price: 100 }]; // Return a copy to prevent mutation

    }

    public getProductById(id: number): productType | undefined {
        return this._productList.find((item) => item.id === id);
    }

    public getProductByPrice(min: number, max: number): productType[] {
        return this._productList.filter((item) => item.price >= min && item.price <= max);
    }

    public addProduct(data: productType): productType[] {
        const uniqId = Math.random();
        const product: productType = { id: uniqId, ...data };
        return [...this._productList, product]; // Return a new array with the new product added
    }

    public removeProduct(id: number): productType[] {
        return this._productList.filter((item) => item.id !== id);
    }

    public updateProduct(id: number, data: Partial<productType>): productType[] {
        return this._productList.map((item) => {
            if (item.id === id) {
                return { ...item, ...data }; // Return a new object with updated properties
            }
            return item;
        });
    }
}

const _productsData: productType[] = [
    { id: 1, name: "p1", description: "d1", price: 100 },
    { id: 2, name: "p2", description: "d2", price: 200 },
    { id: 3, name: "p3", description: "d3", price: 300 },
    { id: 4, name: "p4", description: "d4", price: 400 },
    { id: 5, name: "p5", description: "d5", price: 500 },
    { id: 6, name: "p6", description: "d6", price: 600 },
];

export const productModel = new Product(_productsData);



