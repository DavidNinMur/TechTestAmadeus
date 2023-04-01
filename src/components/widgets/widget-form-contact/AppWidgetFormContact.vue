<template src="./AppWidgetFormContact.html"></template>

<script>
import { ref } from 'vue';

export default {
    name: 'AppWidgetFormContact',
    props:{},
    emits:[''],
    setup(props, { emit }) {

        const firtsNameRefStr = ref('');
        const lastNameRefStr = ref('');
        const emailRefStr = ref('');
        const telephoneNumberRefInt = ref();
        const messageRefStr = ref('');
        const selectedTermsAndConditionsRefBool = ref(false);
        
        const isInvalidEmailRefBool = ref(false);
        const submittedFormRefBool = ref(false);

        const setValidEmail = () => {
            const regexToValidateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regexToValidateEmail.test(emailRefStr.value)
        }

        const onClickTermsButton = () => {
            selectedTermsAndConditionsRefBool.value = !selectedTermsAndConditionsRefBool.value;
        }

        const onSubmitForm = () => {
            submittedFormRefBool.value = true;
            isInvalidEmailRefBool.value = false;
            if (!firtsNameRefStr.value || !lastNameRefStr.value) {
                alert('Por favor ingresa tu nombre y apellido')
                return
            }
            if(!emailRefStr.value){
                alert('Por favor ingresa tu email')
                return
            }
            if(!setValidEmail()){
                isInvalidEmailRefBool.value = true;
                alert('Por favor ingresa un email valido')
                return
            }

            console.log(`Nombre: ${firtsNameRefStr.value}, Apellido: ${lastNameRefStr.value}, Email: ${emailRefStr.value}, Telephone: ${telephoneNumberRefInt.value}, Message: ${messageRefStr.value}, TermsAccepted: ${selectedTermsAndConditionsRefBool.value}`)
        } 

        return {
            firtsNameRefStr,
            lastNameRefStr,
            emailRefStr,
            telephoneNumberRefInt,
            messageRefStr,
            selectedTermsAndConditionsRefBool,
            
            isInvalidEmailRefBool,
            submittedFormRefBool,

            onClickTermsButton,
            onSubmitForm
        }
    }
}
</script>

<style lang="scss" src="./AppWidgetFormContact.scss"></style>