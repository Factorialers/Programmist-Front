import Image from 'next/image';

const Right = () => (
  <div>
    <Image src="/qiita.png" width={150} height={150} alt="Picture of the author" />
    <button type="button" className="py-2 px-4 font-semibold text-rose-500  hover:text-white bg-transparent rounded border border-rose-500 ">
      DOWNLORD THIS WORK
    </button>
  </div>
);
export default Right;
