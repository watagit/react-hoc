import { NextPage } from 'next';
import ClickCounter from '../components/ClickCounter';
import HoverCounter from '../components/HoverCounter';

const Index: NextPage = () => {
  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  );
};

export default Index;
