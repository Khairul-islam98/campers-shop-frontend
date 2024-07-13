import { ScaleLoader } from 'react-spinners';

type LoaderProps = {
  smallHeight?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader height={35} width={4} radius={2} color='red' />
    </div>
  );
}

export default Loader;
