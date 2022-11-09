import { Text, View } from "react-native"

interface PropTypes {
    data?: any
}

export default function BluePrint(props: PropTypes) {
    return (
        <View>
            <Text>Hello World!</Text>
        </View>
    )
}