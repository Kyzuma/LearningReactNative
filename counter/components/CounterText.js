import {StyleSheet, Text} from 'react-native';

export default function CounterText({color, fontSize, children}) {
    return(
        // Shorter syntax for inline styles
        <Text style = {{color, fontSize}}>{children}</Text>

        // Same as
        // <Text style = {{ color: color, fontSize: fontSize }}>{children}</Text>
    )
}