export function validateForm({name,surname,studentId,
    username,password,confirm}){
        const errors = {}
        
        if(name.trim()==='') errors.name='กรุณากรอกชื่อ'
        if(surname.trim()==='') errors.surname='กรุณากรอกนามสกุล'
        
        return errors
}
export function hasErrors(error){
    return Object.keys(error).length > 0 
}