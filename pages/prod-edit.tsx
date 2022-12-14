import NavBar from "components/Nav_Bar";
import ProdUploadOrEdit from "components/ProdUploadOrEdit";
import Title from "components/Title";

const ProdEdit = () => {
  return (
    <>
      <Title title="Edit" />
      <NavBar menu="regist" />
      <ProdUploadOrEdit work="edit" />
    </>
  );
};

export default ProdEdit;
