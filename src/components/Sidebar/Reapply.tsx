import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Reapply = () => {
  const { filters, setFilters, setReapply, reapply } = useContext(AppData);

  const handleClick = () => {
    setReapply(false);
    setFilters({ ...filters });
  };

  return (
    <button className="btn-sidebar" onClick={handleClick}>
      Reapply
    </button>
  );
};

export default Reapply;
