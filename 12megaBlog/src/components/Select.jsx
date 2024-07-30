import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id}></label>}
        <select className='' ref={ref} id={id} {...props}>
            {options?.map((option) => {
                <option key={option} value={option}>{option}</option>
            })}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)