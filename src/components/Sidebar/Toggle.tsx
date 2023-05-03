import { useContext } from "react";
import { AppData } from "~/context/AppData";

const Toggle = () => {
  const { filters, setFilters } = useContext(AppData);
  const handleClick = () => {
    const issuer = { ...filters.issuer };
    Object.values(issuer).every(Boolean)
      ? Object.keys(issuer).forEach(
          (v) => (issuer[v as keyof typeof issuer] = false)
        )
      : Object.keys(issuer).forEach(
          (v) => (issuer[v as keyof typeof issuer] = true)
        );
    setFilters({ ...filters, issuer });
  };
  return (
    <button className="btn-primary btn-wide btn mt-4" onClick={handleClick}>
      Toggle All
    </button>
  );
};
export default Toggle;
