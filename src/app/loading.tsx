import Image from 'next/image';
import { ImSpinner8 } from 'react-icons/im';

// photo
import loadingImage from '../../public/images/Products/loading.jpg';

const Loading = () => {
  return (
    <div className="flex items-center text-2xl h-screen space-x-3 justify-center">
      <div className="relative text-center rounded-full text-gray-500 w-[100px] h-[100px]">
        <Image src={loadingImage} alt="loading image" className="rounded-full" width={100} height={100} />
        <ImSpinner8 className="animate-spin absolute h-[120px] w-[130px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300" />
      </div>
    </div>
  );
};

export default Loading;
