'use client';

import { useActionState } from 'react';
import { addToCart } from './actions';

function AddToCartForm({ itemID, itemTitle }: any) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  console.log({ isPending });
  return (
    <form action={formAction} className="flex gap-2 items-center">
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <input type="hidden" name="foo" value={Math.random()} />
      <button className="bg-green-300 p-2 border border-black" type="submit">
        Add to Cart
      </button>
      <p>Is Pending: {isPending.toString()}</p>
      {message}
    </form>
  );
}

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </div>
  );
}
