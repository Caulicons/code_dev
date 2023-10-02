type selectedProps = {
  customMessage?: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  options: string[];
} & React.HTMLAttributes<HTMLSelectElement>;

const Selected = ({
  options,
  onChange,
  customMessage,
  ...props
}: selectedProps) => {
  return (
    <select
      className={`
      w-[200px] rounded-xl border-r-[14px] border-r-transparent bg-white/10 py-4 pl-[14px] text-white/60 outline-none hover:bg-white/20 focus:bg-gray-600/95
      `}
      onChange={onChange}
      defaultValue=""
    >
      <option value={""} disabled>
        {customMessage ?? "Selected"}
      </option>
      {options.map((option, index) => (
        <option className="p-3" value={option.toLowerCase()} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Selected;
//    block w-full  rounded-xl border   border-gray-600 bg-gray-700 p-2.5 text-sm text-white

//w-full rounded-xl border-r-8 border-r-transparent bg-white/10 p-4 text-white text-white/60 outline-none hover:bg-white/20 active:bg-white/20
