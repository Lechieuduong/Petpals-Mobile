import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";


const DEVICE_WIDTH = Dimensions.get("window").width;
const images = [
    require("../assets/frame-1.png"),
    require("../assets/frame-2.png"),
    require("../assets/frame-3.png")
]

class BackgroundCarousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        const { selectedIndex } = this.state;

        return (
            <View style={{ height: "100%", width: "100%"}}>
                <ScrollView horizontal pagingEnabled>
                    {images.map(image => {
                        <Image 
                            key={image}
                            source={{uri: image}}
                            style={styles.backgroundImage}
                        />
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: "100%",
        width: "100%"
    }
});

export { BackgroundCarousel };