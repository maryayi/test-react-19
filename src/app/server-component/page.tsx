import Client from '@/app/server-component/Client';
import Server2 from '@/app/server-component/Server';
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Client>
        <Server2 />
      </Client>
    </div>
  );
};

export default page;
