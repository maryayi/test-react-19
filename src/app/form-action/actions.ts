'use server';

export async function addToCart(prevState: any, queryData: any) {
  console.log({ queryData, prevState });
  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart';
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
}
