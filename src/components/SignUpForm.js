import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'

const ROOT_URL = ''

const SignUpForm = () => {

    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post('createUserURL', { phone })
            await axios.post('requestOneTimePasswordURL', { phone })
        } catch (err) {
            console.log(err)
        }
    }

    /*
    const handleSubmit = () => {
        axios.post('createUserURL', {
            phone: phone
        })
        .then(() => {
            axios.post('requestOneTimePasswordURL', {
                phone: phone
            })
        })
    }
    */
    
    return (
        <View >
            <View style={{ marginBottom: 10 }}>
                <Input 
                    label="Enter Phone Number"
                    value={phone}
                    onChangeText={phone => setPhone(phone)}
                />
            </View>
            <Button 
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
    )
}

export default SignUpForm

const styles = StyleSheet.create({})
