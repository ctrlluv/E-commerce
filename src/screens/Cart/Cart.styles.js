import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    confirm: {
        color: 'black',
        fontFamily: 'PoppinsThinItalic',
        fontSize: 30,
        marginTop: 10,
    
    },
    total: {
        color: 'black',
        fontFamily: 'PoppinsThinItalic',
        fontSize: 20,
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        alignItems: 'center',
    }
})