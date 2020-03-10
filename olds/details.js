import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview'; 

const makeHtml = (id) => {
    return (`
    <style>
        .video {
            position : relative;
            padding-bottom : 56.25%
        }
        iframe {
            position : absolute;
            left : 0;
            top : 0;
            right : 0;
            bottom : 0;
            width : 100%;
            height : 100%;
        }
    </style>
    <div class="video">
    <iframe  width="560" height="315" src="https://www.youtube.com/embed/p7bfOZek9t4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `)
}

function Details(props){
    return (
        <ScrollView>
            <View style={styles.top}>
                <Text>{props.name}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.details}>
                    <Image 
                        style={styles.cover}
                        source={{uri : props.image}}   
                    />
                    <Text style={styles.description}>{props.species}</Text>
                </View>
                <View>
                  <Text style={styles.details}>Status : {props.status}</Text>
                  <Text style={styles.details}>Gender : {props.gender}</Text>
                </View>
                <View style={styles.trailer}>
                    <WebView 
                    source={{html : makeHtml('p7bfOZek9t4')}}
                    />
                </View>
             
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {},
    trailer: {
      height: 200,
      marginBottom: 20,
    },
    details: {
      flexDirection: "row",
      marginBottom: 10
    },
    cover: {
      width: 125,
      height: 190
    },
    title: {
      color: "#44546b",
      fontSize: 18,
      fontWeight: "bold"
    },
    top: {
      borderBottomWidth: 1,
      borderBottomColor: "#eaeaea",
      padding: 20,
      backgroundColor: "white"
    },
    bottom: {
      padding: 20,
      flex: 1
    },
    description: {
      fontSize: 15,
      lineHeight: 22.5,
      color: "#4c4c4c",
      marginLeft: 10,
      flex: 1
    }
  });
export default Details