export function validateForm({name,surname,studentId,
    username,password,confirm}){
        const errors = {}
        
        if(name.trim()==='') errors.name='กรุณากรอกชื่อ'
        if(surname.trim()==='') errors.surname='กรุณากรอกนามสกุล'
        if(!/^\d{10}$/.test(studentId.trim())) errors.studentId=
        'ต้องกรอกรหัสนิสิตเป็นตัวเลข 10 หลัก'

        if(!/^[a-zA-Z0-9_]{4,20}$/.test(username.trim())) errors.username=
        'ชื่อผู้ใช้ยาว 4-20 ตัว ใช้ได้เฉพาะa-z , A-z , 0-9 และ _'

        if(password.length < 8) {
        errors.password='รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร'
        } else if(!/^[a-zA-Z]/.test(password) || !/\d/.test(password)){
            errors.password = 'รหัสผ่านต้องเป็นตัวอักษรและตัวเลข'
        }

        if(confirm !== password){
            errors.confirm='รหัสผ่านต้องตรงกัน'
        }

        return errors
}
export function hasErrors(error){
    return Object.keys(error).length > 0 
}