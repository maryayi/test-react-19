'use client';

import { PropsWithChildren, useState } from 'react';

type Props = PropsWithChildren<{}>;

const Client = ({ children }: Props) => {
  const [state, setState] = useState(false);
  return (
    <div>
      {children}
      <p>{state.toString()}</p>
      <button
        className="p-2 bg-gray-400"
        onClick={() => setState((prev) => !prev)}
      >
        toggle
      </button>
    </div>
  );
};

export default Client;
