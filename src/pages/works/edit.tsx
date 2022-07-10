import type { NextPage } from 'next';
import LayoutWithOnlyHead from '../../components/layouts/LayoutWithOnlyHead';
import Edit from '../../features/edit';

const EditPage: NextPage = () => (
  <LayoutWithOnlyHead pageTitle="作品情報編集 | Programmist" className="bg-primary">
    <Edit />
  </LayoutWithOnlyHead>
);

export default EditPage;
