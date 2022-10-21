interface Props {
  input: string;
  handleChangeText: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Input: React.FC<Props> = ({ input, handleChangeText }) => {
  return (
    <div className="flex flex-col w-screen md:w-2/4 p-8 box-border">
      <label htmlFor="input" className="text-gray-300 text-4xl mb-4">
        Input
      </label>
      <div className="flex">
        <textarea
          id="input"
          name="input"
          value={input}
          onChange={handleChangeText}
          className="bg-[#222222] text-gray-300 resize-none min-h-[400px] w-full border-solid border-2 outline-none p-2 transition-colors focus:border-green-100"
        />
      </div>
    </div>
  );
};

export default Input;
