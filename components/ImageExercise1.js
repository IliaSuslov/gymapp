import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.handlePress()}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={this.props.imageSource}/>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.descriptionText}>{this.props.description}</Text>     
                   
                    </View>
            </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    imageContainer: {
        flex: 1,
        padding: 8,

        
    },
    image: {
        flex: 1,
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
        position: 'absolute',
        height: '50%',
        width: '50%',
    },
    });


export default MenuItem;