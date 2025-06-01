import { View } from 'react-native';


const BlockRGB = (props) => {
    const { red, green, blue } = props;

    return(
        <View
            style={{
                width: "100%",
                height: 100,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}
        />
    );
};

export default BlockRGB;