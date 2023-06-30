import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import Header from '../components/Header';

const AboutScreen = () => {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.containerBis}>

                <Header />

                <Text style={styles.containerTitle}>A propos</Text>
        
                <TouchableOpacity>
                    <Image style={styles.hero} source={require('../assets/images/hero-image.jpg')} />
                </TouchableOpacity>

                <Text style={styles.containerSubtitle}>Bienvenue sur Néafood, votre application de réservation et de vente de repas en ligne dans le Grand Nouméa !</Text>
                <Text style={styles.containerSubtitle}>Chez Néafood, nous sommes passionnés par la nourriture et nous voulons rendre l'expérience culinaire plus pratique et accessible que jamais. Notre plateforme vous permet de découvrir une variété de délicieux repas préparés par des chefs locaux talentueux, le tout depuis le confort de votre foyer.</Text>
                <Text style={styles.containerSubtitle}>Que vous soyez à la recherche d'un repas savoureux pour vous-même, d'un dîner en famille ou d'un événement spécial, Néafood est là pour répondre à tous vos besoins. Parcourez notre sélection de plats alléchants, des spécialités locales aux cuisines internationales, et choisissez ce qui vous fait envie.</Text>
                <Text style={styles.containerSubtitle}>Nous comprenons l'importance de la fraîcheur et de la qualité des aliments, c'est pourquoi nous travaillons en étroite collaboration avec des producteurs locaux pour vous offrir des ingrédients de première qualité. Chaque repas est préparé avec soin et passion, garantissant une expérience gustative exceptionnelle à chaque bouchée.</Text>
                <Text style={styles.containerSubtitle}>Notre équipe dévouée est là pour vous aider à chaque étape du processus, de la commande à la livraison. Nous veillons à ce que votre expérience avec Néafood soit fluide, agréable et sans tracas. Nous mettons l'accent sur un service client de première classe et nous nous efforçons de dépasser vos attentes à chaque interaction.</Text>
                <Text style={styles.containerSubtitle}>Rejoignez-nous dès maintenant et découvrez une nouvelle façon de savourer de délicieux repas dans le Grand Nouméa. Téléchargez notre application Néafood sur votre appareil mobile et commencez à explorer notre sélection de repas alléchants. Profitez de la commodité de la réservation en ligne et de la livraison à domicile, pour des repas savoureux à portée de main.</Text>
                <Text style={styles.containerSubtitle}>Merci de choisir Néafood. Nous sommes impatients de vous servir et de vous offrir une expérience culinaire exceptionnelle.</Text>
            </View>
        </ScrollView>
    );
}      

export default AboutScreen;