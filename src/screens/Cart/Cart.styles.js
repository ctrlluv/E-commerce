import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    confirm: {
        color: colors.secondary,
    },
    total: {
        color: colors.secondary,
        fontFamily: 'PoppinsThinItalic',
        fontSize: 20,
    }
})