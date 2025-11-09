
const Checkbox = ({
  id,
  text,
  className = "",
  checkboxClassName = "",
  labelClassName = "",
  checked,
  ...props
}) => {
  return (
    <div
      className={`relative flex items-center gap-2 select-none ${className}`}
    >
     
      <input
        id={id}
        type="checkbox"
        checked={checked}
        {...props}
        className={`w-5 h-5 text-blue-600 border-gray-300 rounded cursor-pointer 
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200 
          ${checkboxClassName}`}
      />

     
      {text && (
        <label
          htmlFor={id}
          className={`cursor-pointer text-gray-800 hover:text-blue-600 font-medium text-sm transition-colors duration-200 ${labelClassName}`}
        >
          {text}
        </label>
      )}
    </div>
  );
};

export default Checkbox;

