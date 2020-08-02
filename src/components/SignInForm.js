import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

const ROOT_URL = ''

const SignInForm = () => {

    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('verifyOneTimePasswordURL', { phone, code })

            firebase.auth().signInWithCustomToken(repsonse.data.token);
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <View>
            <View style={{ marginBottom: 10 }}>
                <Input 
                    label="Enter Phone Number"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                />
                <Input 
                    label="Enter Code"
                    value={code}
                    onChangeText={text => setCode(text)}
                />
            </View>
            <Button 
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
    )
}

export default SignInForm

const styles = StyleSheet.create({})
