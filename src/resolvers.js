import QUERY_CARD_LIST from '../src/containers/CardListWithQuery/gql';
import QUERY_CART_INFO from '../src/components/HomeCart/gql';

export const resolvers = {
  Mutation: {
    addItemToCart: (_, args, { cache }) => {
    const { cart }  = cache.readQuery({ query: QUERY_CART_INFO })
    const itemsForSale = cache.readQuery({ query: QUERY_CARD_LIST })
    const allItems = itemsForSale.items.map(item => item) 
    const newItem = allItems.find(item => item.id === args.id)
    cache.writeData({
        data: {
          cart: {
             items: cart.items.concat(newItem),
             total: cart.total + newItem.price,
            __typename: 'cart',
          }
        }
      })
    }
  }
}


