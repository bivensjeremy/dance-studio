import { Checkbox, ListBox, Select, Input, Label } from "@heroui/react";

const InputField = ({ label, placeholder, text }) => {
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={label}>{placeholder}</Label>
            <Input 
                className="py-3" 
                id={label} 
                placeholder={`Enter your ${placeholder}`} 
                type={text}
            />
        </div>
    );
}

const SelectField = ({ label, placeholder, text }) => {
    return (
        <div className='flex flex-col gap-1'>
            
            <Select placeholder="Select one">
                <Label htmlFor={label}>{placeholder}</Label>
                <Select.Trigger className="py-3">
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="dance" textValue="Dance">
                            Dance
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="model" textValue="Model">
                            Model
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="photography" textValue="Photography">
                            Photography
                        <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select> 
        </div>
        
    );
}

const CheckboxField = ({ label, name }) => {
    return (
        <div className="flex items-center gap-3">
            <Checkbox id={name}>
                <Checkbox.Control>
                    <Checkbox.Indicator />
                    </Checkbox.Control>
            </Checkbox>
            <Label htmlFor={name}>{label}</Label>
        </div>
    );
}

export { SelectField, InputField, CheckboxField }