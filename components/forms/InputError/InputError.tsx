type InputErrorProps = {
  children: string;
};

const InputError = ({ children }: InputErrorProps) => (
  <div className="text-sm bg-red p-2 text-white">{children}</div>
);

export default InputError;
