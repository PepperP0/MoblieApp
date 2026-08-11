import { Platform,StatusBar } from "react-native";
export  const colors = {
    bg:'#0d1117',
    surface:'#161d22',
    border:'#38363d',
    text:'#c9d1d9',
    muted:'#8b9496',
    cyan:'#61dafb',
    heart:'#f778ba',
}

export const TOP_INSECT = Platform.OS === 'android' ? StatusBar.currentHeight|| 0:44