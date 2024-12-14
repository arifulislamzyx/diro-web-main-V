import { Button } from '../ui/button';
import { FaArrowRightLong } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="mx-auto text-center">
        <div className="text-[26px] font-bold">Invoice tracking made simple</div>
        <p className="mt-2 text-sm">Join over 4,000+ startups already growing with SmartBooks</p>
      </div>
      <div className="flex gap-x-2 justify-center mt-6">
        <Button>Start free 14-day trial</Button>
        <Button variant="outline">
          <div className="flex gap-x-2 items-center text-black">
            Explore our demo <FaArrowRightLong />
          </div>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
