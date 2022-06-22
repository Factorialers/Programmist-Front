import LinkList from './components/LinkList';
import Modal from './components/Modal';

const Header = () => (
  <div className="grid grid-cols-10 p-6 bg-base shadow-md">
    <div className="flex col-span-8 col-start-2 justify-center items-center space-x-16">
      <LinkList />
    </div>
    <div className="text-right">
      <Modal />
    </div>
  </div>
);

export default Header;
