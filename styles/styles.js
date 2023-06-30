import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // Conteneurs

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    containerBis: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 50,
        overflow: "scroll",
    },
    containerContent: {
        flexGrow: 1,
    },

    // Titre et sous-titre des pages

    containerTitle: {
        color: "white",
        fontSize: 30,
        fontWeight: 900,
        textAlign: "center",
        position: "absolute",
        top: 128,
        zIndex: 2,
    },
    containerSubtitle: {
        color: "black",
        fontSize: 16,
        padding: 20,
        lineHeight: 24,
        textAlign: "justify"
    },

    // Logo

    logo: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
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
        borderColor: "#39d353",
    },
    textStyle: {
        fontSize: 16,
        color: "white",
    },

    // Loader

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    // Header

    header: {
        position: "absolute",
        top: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        padding: 20,
        width: "100%",
        height: 75,
    },

    // Hero

    hero: {
        width: 1000,
        height: 150,
        marginTop: 25,
        marginBottom: 25,
    },

    // Menu

    menuContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        ...StyleSheet.absoluteFillObject,
    },
    modalOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
    },
    menuItem: {
        marginVertical: 10,
    },
    menuItemText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#e67104",
    },
    menuPopup: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#FFFFFF",
        zIndex: 2,
        padding: 20,
    },
    menuCloseButton: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "transparent",
        padding: 10,
        zIndex: 2,
    },

    // Produits

    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 20,
        gap: 5,
        padding: 10,
    },
    productCard: {
        width: "48%",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#DDDDDD",
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    productImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
    },
    productPrice: {
        fontSize: 14,
        color: "#888888",
    },

    // Popup du produit

    productPopup: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    productPopupTitle: {
        fontSize: 21,
        fontWeight: 900,
        textTransform: "uppercase",
        marginBottom: 10,
    },
    productPopupPrice: {
        fontSize: 16,
        color: "#888888",
    },
    productPopupDescription: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    productPopupCloseButton: {
        backgroundColor: "transparent",
        padding: 10,
        borderRadius: 8,
        position: "absolute",
        top: 10,
        right: 0,
    },
    productPopupImage: {
        width: 350,
        height: 300,
        marginTop: 25,
        marginBottom: 25,
    },
    productPopupAddToCart: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#eab317",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    productPopupAddToCartText: {
        color: "white",
        marginLeft: 10,
    },
});
