const InputField = ({ label, placeholder, text }) => {
    return (
        <input 
            type={text} 
            id={label}
            name={label}
            className="form-control inputStyle" 
            placeholder={placeholder}
            
        />
    );
}

const SelectField = ({ label, placeholder, text }) => {
    return (
        <select className="inputStyle">
            <option value="None Selected">{placeholder}</option>
            <option value="Dance">Dance</option>
            <option value="Model">Model</option>
            <option value="Photography">Photography</option>
        </select> 
    );
}

const CheckboxField = ({ label, acknowledgement }) => {
    return (
        <div>
            <input 
                id={acknowledgement} 
                type="checkbox"
                className="w-6 h-6 accent-white" 
            />
            <label className="text-sm"> {label} </label>
        </div>
        
    );
}

export { SelectField, InputField, CheckboxField }