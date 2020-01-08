import QUERY_CARD_LIST from '../src/containers/CardListWithQuery/gql';
import QUERY_CART_INFO from '../src/components/HomeCart/gql';

export const resolvers = {
  Mutation: {
    addItemToCart: (_, args, { cache }) => {
    const { cart } = cache.readQuery({ query: QUERY_CART_INFO })
    const itemsForSale = cache.readQuery({ query: QUERY_CARD_LIST })
    //const newItem = itemsForSale.find(item => item.id === args.id)
      cache.writeData({
        data: {
          cart: {
            // items: args,
            // items: cart.items.concat(newItem),
            // total: cart.total + newItem.price,
            total: 2344554334,
            __typename: 'cart',
          }
        }
      })
      console.log(args)
      console.log(itemsForSale)
    }
  }
}


