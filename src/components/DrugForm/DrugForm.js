import React from 'react'

const DrugForm = ({ formData }) => {
    console.log(formData)
    formData.fields.sort(function (a, b) {
        return a.order - b.order;
    });

    function addingDropdown(field){
        if(field?.items?.length > 0){
            return <select>
                {field.items.map((item =>(
                    <option key={item.value} value={item.value}>{item.text}</option>
                )))}
            </select>
        }else{
            return field.isReadonly === true ? (<input type={field.type} name={field.key} required={field.isRequired} placeholder={field.unit} readOnly/>
            ) : (<input type={field.type} name={field.key} required={field.isRequired} placeholder={field.unit} />
            )
        }
    }

    return (
        <form>
            {
                formData.fields.map((field) => (
                    <div key={field.order}>
                        <label>{field.label}</label>
                        {addingDropdown(field)}
                    </div>
                ))
            }
            <button type='submit'>Submit</button>
        </form>
    )
}

export default DrugForm