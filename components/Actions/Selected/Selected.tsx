type selectedProps = {
  onChange: () => void;
  options: string[];
} & React.HTMLAttributes<HTMLSelectElement>;

const Selected = ({ options, onChange, ...props }: selectedProps) => {
  return (
    <select className={''} onChange={onChange}>
      {options.map((option, index) => (
        <option className={''} value={option.toLowerCase()} key={index}>{option}</option>
      ))}
    </select>
  );
};
