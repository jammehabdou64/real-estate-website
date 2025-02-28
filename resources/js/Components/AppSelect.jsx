export default function AppSelectInput({
  items = [],
  title = "",
  text = "",
  optionValue = "",
  ...props
}) {
  return (
    <select className="form-input-control" {...props}>
      <option value="">{title}</option>
      {items.map((item, index) => (
        <option key={index} value={item[optionValue] || item}>
          {item[text] || item}
        </option>
      ))}
    </select>
  );
}
