'use client'

import { CheckboxField, InputField, SelectField } from "@/app/components/InputField";
import { Button } from "@heroui/react";
import { Annoyed } from "lucide-react";
import { useState } from "react";

const AppForm = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    return (
        <form>
            <div className="block py-10 m-auto max-w-4xl">
                <div>
                    <div className="grid grid-cols-2 md:gap-6 pb-4">
                        <InputField label="firstName" placeholder="First Name" />
                        <InputField label="lastName" placeholder="Last Name" />
                    </div>

                    <div className="grid grid-cols-1 md:gap-6 pb-4">
                        <InputField label="email" placeholder="Email" text='email' />
                    </div>

                    <div className="grid grid-cols-1 md:gap-6 pb-4">
                        <InputField label="street" placeholder="Street Address" />
                    </div>

                    <div className="grid grid-cols-3 md:gap-6 pb-4">
                        <InputField label="city" placeholder="City" />
                        <InputField label="state" placeholder="State" />
                        <InputField label="zip" placeholder="Zip Code" />
                        
                    </div>

                    <div className="grid grid-cols-1 md:gap-6 pb-4">
                        <SelectField placeholder="What is your area of interest?" />
                    </div>

                    <div className="grid grid-cols-1 md:gap-2 pb-4">
                        <CheckboxField 
                            name="acknowledgement"
                            label="If this were a real acknowledgement it would say something like: I, understand and accept any risks associated with my participation and accept the possibility of injury. I waive my right to sue if I am injured in any way throughout my participation. Furthermore, I give consent for Dreamers to utilize photography and/or videos of me in promotional and business use. But since this is not a real consent form, it is just some random text."
                        />
                    </div>
                
                    <div className="py-3 flex flex-row">
                        <Button className='rounded-lg w-24' onClick={()=> setFormSubmit(true)}>
                            { formSubmit ? ( <Annoyed /> ) : ( "Submit" )}
                        </Button>
                        
                        <div className="my-auto pl-3 text-sm italic">
                            { formSubmit ? <p>Told you so...</p> : <p>Clicking this button does nothing.</p> }
                        </div>
                    </div>
                    
                </div>
            </div>
        </form>
    );
}

export default AppForm;