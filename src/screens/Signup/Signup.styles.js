import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        backgroundColor: colors.secondary,
        width: '80%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontFamily: 'PoppinsThinItalic',
    },
    inputEmail: {
        width: '95%',
        backgroundColor: 'black',
        height: 30,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: colors.secondary,
        fontFamily: 'PoppinsMediumItalic',
    },
    loginButton:{
        backgroundColor: colors.primary,
        width: '50%',
        height: 35,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    signUpToStart:{
        fontFamily: 'PoppinsThinItalic',
        fontSize: 35,
    },
    signButtons:{
        fontFamily: 'PoppinsMediumItalic',
        fontSize: 20,
    },
    alreadyHaveAnAccount:{
        fontFamily: 'PoppinsMediumItalic',
    }
})