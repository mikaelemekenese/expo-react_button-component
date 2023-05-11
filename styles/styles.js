import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    // Conteneurs

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBis: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 100,
    },

    // Titre et sous-titre des pages

    containerTitle: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
    },
    containerSubtitle: {
        color: 'black',
        fontSize: 16,
        marginTop: 15,
        marginBottom: 50,
        textAlign: 'center',
    },

    // Logo

    logo: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Bouton

    plainButton: {
        marginTop: 25,
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 16,
    },
    outlinedButton: {
        borderWidth: 3,
        borderColor: '#39d353',
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
    },

    // Loader

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Header

    header: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        padding: 20,
        width: '100%',
        height: 75,
    },

    // Hero

    hero: {
        width: '100%',
        height: 100,
        marginTop: 25,
    },

    // Menu

    menuContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    menuItem: {
        marginVertical: 10
    },
    menuItemText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e67104',
    },
    menuPopup: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        zIndex: 2,
        padding: 20,
    },
    menuCloseButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'transparent',
        padding: 10,
        zIndex: 2,
    },    
});
