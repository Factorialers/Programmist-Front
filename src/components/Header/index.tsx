import LinkList from './components/LinkList';

const Header = () => (
  <div className="p-6 shadow-md">
    <div className="flex relative justify-center items-center space-x-16">
      <LinkList />
    </div>
  </div>
);

export default Header;
