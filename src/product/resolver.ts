import { IResolvers } from '@graphql-tools/utils';
import { productModel } from './model';

const resolvers: IResolvers = {
    Query: {
        getProducts: () => { return productModel.getProductList },
        getProduct: (_, { id }) => productModel.getProductById(id),
        filterProductByPrice: (_, { min, max }) => productModel.getProductByPrice(min, max),
    },
    Mutation: {
        createProduct: (_, { data }) => productModel.addProduct(data),
        updateProduct: (_, { id, data }) => productModel.updateProduct(id, data),
        removeProduct: (_, { id }) => productModel.removeProduct(id),
    },
};

export default resolvers;
