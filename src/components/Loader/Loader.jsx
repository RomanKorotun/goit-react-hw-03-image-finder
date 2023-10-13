import { LoaderCard } from './Loader.styled';
import PulseLoader from 'react-spinners/PulseLoader';

export const Loader = () => {
  return (
    <LoaderCard>
      <PulseLoader color="#36d7b7" />
    </LoaderCard>
  );
};
