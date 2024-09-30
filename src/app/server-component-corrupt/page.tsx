// import Client from '@/app/server-component/Client';
// import Server2 from '@/app/server-component/Server';
import { Suspense, use } from 'react';
type Props = {};

export const dynamic = 'force-dynamic';

const promise = new Promise<{ result: string }>((resolve) => {
  setTimeout(() => {
    console.log('Now!');
    resolve({ result: 'Resolved' });
  }, 15000);
});

const Comp1 = ({ promise }: { promise: Promise<{ result: string }> }) => {
  const { result } = use(promise);
  return <p>{result}</p>;
};

const page = (props: Props) => {
  const result = use(promise);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comp1 promise={promise} />
    </Suspense>
  );
};

export default page;
