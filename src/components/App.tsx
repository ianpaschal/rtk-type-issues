import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectForce } from 'src/store';

export const App = (): JSX.Element => {
  const force = useAppSelector(selectForce);
  return (
    <pre>{JSON.stringify(force, null, 2)}</pre>
  );
};
