import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils"
import { HiCheck, HiOutlineChevronUpDown } from "react-icons/hi2"

const FormSelect = ({
  form,
  name,
  className,
  label,
  placeholder,
  disabled,
  data = [],
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return (
    <div
      className={cn("flex flex-col gap-1", className)}
      ref={ref}
    >
      <label
        htmlFor={name}
        className="font-medium text-sm text-foreground"
      >
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(open => !open)}
          className={cn(
            "bg-background relative text-muted-foreground w-full px-4 py-1.5 rounded-md text-left",
            !form.watch(name) && "text-muted-foreground/40"
          )}
        >
          {form.watch(name)
            ? data.find(item => item.value == form.watch(name)).label
            : placeholder}
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            <HiOutlineChevronUpDown />
          </span>
        </button>
        <ul
          className={cn(
            "absolute transition invisible opacity-0 translate-y-3 bottom-full w-full left-0 bg-popover shadow border-border rounded p-1",
            isOpen && "visible opacity-100 translate-y-0"
          )}
        >
          {data.map(item => (
            <li
              onClick={() => {
                form.setValue(name, item.value)
                setIsOpen(false)
              }}
              className="px-3 py-1 cursor-pointer hover:bg-secondary rounded flex justify-between items-center"
              key={name + "-" + item.id}
            >
              <span>{item.label}</span>
              {form.watch(name) && form.watch(name) === item.value && (
                <HiCheck />
              )}
            </li>
          ))}
        </ul>
      </div>
      {form.formState.errors[name] && (
        <p className="text-xs text-red-500">
          {form.formState.errors[name].message}
        </p>
      )}
    </div>
  )
}

FormSelect.propTypes = {
  form: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  data: PropTypes.array,
}
export default FormSelect
