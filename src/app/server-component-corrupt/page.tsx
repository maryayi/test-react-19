// import Client from '@/app/server-component/Client';
// import Server2 from '@/app/server-component/Server';
import { Suspense, use } from 'react';
type Props = {};



const Comp1 = ({ promise }: { promise: Promise<{ result: string }> }) => {
  console.log("Rendering Comp1");
  const { result } = use(promise);
  return <p>{result}</p>;
};

const page = (props: Props) => {
  const promise = new Promise<{ result: string }>((resolve) => {
    setTimeout(() => {
      console.log('Now!');
      resolve({ result: 'Resolved' });
    }, 15000);
  });
  const result = use(promise);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comp1 promise={promise} />
    </Suspense>
  );
};

export default page;
