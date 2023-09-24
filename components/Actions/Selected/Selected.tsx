type selectedProps = {
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  options: string[];
} & React.HTMLAttributes<HTMLSelectElement>;

const Selected = ({ options, onChange, ...props }: selectedProps) => {
  return (
    <select
      className={`
      w-full rounded-xl border-r-8 border-r-transparent bg-gray-100/5 p-4  text-white/60 outline-none hover:bg-gray-100/10 focus:bg-gray-700/90
      `}
      onChange={onChange}
      defaultValue=""
    >
      <option value="" disabled>
        Selected a language
      </option>
      {options.map((option, index) => (
        <option className={"my-3 "} value={option.toLowerCase()} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Selected;
//    block w-full  rounded-xl border   border-gray-600 bg-gray-700 p-2.5 text-sm text-white

//w-full rounded-xl border-r-8 border-r-transparent bg-white/10 p-4 text-white text-white/60 outline-none hover:bg-white/20 active:bg-white/20
