import { useState } from "react";
import {View, Text, StyleSheet, TextInput, Pressable, Alert, Platform,
ScrollView,KeyboardAvoidingView} from 'react-native'
import { useSQLiteContext } from "expo-sqlite";
import { styles } from "../styles/registerStyles";
import { colors } from "../styles/theme";
import Field from "../components/Field";
import { validateForm,hasErrors } from "../utils/validata";
import { registerStudent } from "../db/database";
const EMPTY_FORM ={
    name:'',
    surname:'',
    studentId:'',
    username:'',
    password:'',
    confirm:'',
}

const RegisterScreen = ({onRegisterScreen}) =>{
    const db = useSQLiteContext()

    const[form,setform] = useState(EMPTY_FORM)
    const[error,seterror] = useState({})
    const[saving,setSaving] = useState(false)
    const[success,setSuccess] = useState('')

    function setField(field,value){
        setform((prev) => ({...prev,[field]: value}))
        
        if(error[field]){
            seterror((prev)=> {
            const next = {...prev}
            delete next[field]
            return next
            })
            
    }
}
    async function handleSubmit() {
        setSuccess('')
        const found = validateForm(form)
        if(hasErrors(found)){
            seterror(found)
            return
        }
        console.log('ไม่มี Error ปรากฎพร้อมบันทึก ',form)
        
        setSaving(true)
        
        const result = await registerStudent(db,{
            name: form.name.trim(),
            surname:form.surname.trim(),
            student_id:form.studentId.trim(),
            username:form.username.trim(),
            password:form.password.trim(),
        })

        setSaving(false)
        
        if(!result.ok){
            if(result.field) {
                seterror({ [result.field]: result.message })
            } else {
                Alert.alert('ผิดพลาด', result.message)
            }
            return
        }

        setform(EMPTY_FORM)
        seterror({})
        setSuccess(`ลงทะเบียนสำเร็จ หมายเลขในระบบคือ ${result.id}`)

    }
    return(
        

        <KeyboardAvoidingView 
            style={{flex:1}}
            behavior={Platform.OS ==='ios' ? 'padding' :undefined}
        >
            <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps='handled'
            >
            <Text style={styles.intro}> กรุณากรอกข้อมูลให้ครบทุกช่อง</Text>
            
            {success !=='' && (
                <View style={styles.notice}>
                    <Text style={styles.noticeText}>{success}</Text>
                </View>
            )}

            <View style={styles.row}>
                <Field 
                style = {styles.half}
                label = 'ชื่อ'
                placeholder="สมรศรี"
                value={form.name}
                onChangeText={(v)=>setField('name',v)}
                error={error.name}
                
                />
                <Field 
                style = {styles.half}
                label = 'นามสกุล'
                value={form.surname}
                onChangeText={(v)=>setField('surname',v)}
                placeholder="มีบุญตา"
                error={error.surname}
                />
            </View>
            <Field 
                label='รหัสนิสิต'
                placeholder='6721651947'
                keyboardType='number-pad'
                value={form.studentId}
                onChangeText={(v)=>setField('studentId',v)}
                maxLength={10}
                error={error.studentId}
            />
            <Field 
                label='ชื่อผู้ใช้'
                placeholder='samonsri'
                hint='ห้ามซ้ำกับผู้ใช้คนอื่น'
                autoCapitalize='none'
                value={form.username}
                onChangeText={(v)=>setField('username',v)}
                maxLength={20}
                error={error.username}
            />
            <Field 
                label='รหัสผ่าน'
                hint ='อย่างน้อย 8 ตัว มีทั้งตัวอักษรและตัวเลข'
                placeholder='อย่างน้อย 8 ตัวอักษร'
                secureTextEntry 
                value={form.password}
                onChangeText={(v)=>setField('password',v)}
                autoCapitalize='none'
                error={error.password}
            />
            <Field 
                label='ยืนยันรหัสผ่าน'
                placeholder='พิมพ์รหัสผ่านอีกครั้ง'
                secureTextEntry  
                value={form.confirm}
                onChangeText={(v)=>setField('confirm',v)}
                autoCapitalize='none'
                error={error.confirm}
            />
            <Pressable style={[styles.submit,saving && styles.submitDisabled]}
            onPress={handleSubmit}>
                <Text style={styles.submitText}>{saving ? 'กำลังลงบันทึก...' : ' ลงทะเบียน'}</Text>
            </Pressable> 
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen