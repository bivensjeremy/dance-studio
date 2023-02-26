'use client'

import { CheckboxField, InputField, SelectField } from "@/app/components/InputField";
import { Annoyed } from "lucide-react";
import { useState } from "react";

const AppForm = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    return (
        <form>
            <div className="block py-10 m-auto">
                <div>
                    <div className="grid grid-cols-2 md:gap-2 pb-3">
                        <InputField label="firstName" placeholder="First Name" />
                        <InputField label="lastName" placeholder="Last Name" />
                    </div>

                    <div className="grid grid-cols-1 md:gap-2 pb-3">
                        <InputField label="email" placeholder="Email Address" text='email' />
                    </div>

                    <div className="grid grid-cols-1 md:gap-2 pb-3">
                        <InputField label="street" placeholder="Street Address" />
                    </div>

                    <div className="grid grid-cols-3 md:gap-2 pb-3">
                        <InputField label="city" placeholder="City" />
                        <InputField label="state" placeholder="State" />
                        <InputField label="zip" placeholder="Zip Code" />
                        
                    </div>

                    <div className="grid grid-cols-1 md:gap-2">
                        <SelectField placeholder="What is your area of interest?" />
                    </div>

                    <div className="grid grid-cols-1 md:gap-2 pb-3">
                        <CheckboxField 
                            name="acknowledgement"
                            label="If this were a real acknowledgement it would say something to the effect of: I, the undersigned, agree to participate in any and all classes, programs, shows and events offered by or attended by Dreamers Dance Studio. I accept any risks associated with my participation and understand that there is a full possibility of physical illness or injury. I waive my right to sue if I am injured in any way throughout my participation. Furthermore, I give consent for Dreamers to utilize photography and/or videos of me in promotional and business use. But since this is not a real consent form, it is just some random text."
                        />
                    </div>
                
                    <div className="py-3 flex flex-row">
                        <button
                            type="button"
                            onClick={()=> setFormSubmit(true)}
                            className="btn">
                                { formSubmit ? ( <Annoyed /> ) : ( "Submit" )}
                        </button>

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