import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/FiltersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchFilter = useSelector(selectNameFilter);

  const handleFilterChange = (event) =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className={css.wrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={searchFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
}