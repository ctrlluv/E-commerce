import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        
    },
    image: {
        width: 200,
        height: 200,
    },
    cameraButton: {
        backgroundColor: colors.secondary,
        height: 50,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,

        
    },
    signButton: {
        fontFamily: 'PoppinsMediumItalic',
        fontSize: 20,
        
        
    }
})