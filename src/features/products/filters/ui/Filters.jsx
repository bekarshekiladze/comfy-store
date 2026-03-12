import { Form, Link } from "react-router-dom";
import {
  FormCheckbox,
  FormInput,
  FormRange,
  FormSelect,
} from "../../../../shared/ui";

function Filters({ meta }) {
  const { companies, categories } = meta;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        list={categories}
        size="select-sm"
      />
      {/* COMPANY */}
      <FormSelect
        label="select company"
        name="company"
        list={companies}
        size="select-sm"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange name="price" label="select price" size="range-sm" />
      {/* SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-small"
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        reset
      </Link>
    </Form>
  );
}
export default Filters;
