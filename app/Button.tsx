import { Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
type Props = {
        text:string
}

const Button = ({text}:Props) => {
    const [bgColor, setBgColor] = useState ("white")
    const pushed = () => {
        if (bgColor ==="#AE7A41") {
            setBgColor("white")
    }
        else{
            setBgColor ("#AE7A41")
        }

    }
    return(
        <View>
            <TouchableOpacity onPress ={pushed}>
                <Text
                    style={{
                        backgroundColor:bgColor,
                        borderStyle:"solid", 
                        borderRadius:10,
                        padding:6,
                        textAlign: "center",
                        fontSize:20,
                        width: 150,
                        alignSelf: "center",
                        overflow:'hidden',
                    
                    }}>Meira hér</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button