import { View as V, Text as T, StyleSheet as SS, Image as I, ScrollView as SV, ImageBackground as IB, TouchableOpacity as TO} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Svg, { Circle, Path } from 'react-native-svg';


const staticImage = require("../assets/LEAVES.svg")
// <IB source={staticImage} style={styles.IB}>
//         <StatusBar style="auto" />
// </IB>

                                // <I source={staticImage} styles={styles.image_con} />
const Welcome = ({navigation : {navigate}}) => {
        return (
                <V style={{flex: 1}}>
                
                        <V style={styles.main_div}>

                        <V style={styles.svg_con}>
                        
                                
                                <Svg  width="483.41955" height="400.46997" viewBox="0 0 1083.41955 818.46997" >
                                
                                        <Path d="M83.22992,477.02143a16.11455,16.11455,0,0,1,6.81947,31.49937c-8.69831,1.88314-31.75917-9.61217-31.75917-9.61217S74.53161,478.90457,83.22992,477.02143Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        <Path d="M87.08023,807.87043a16.11455,16.11455,0,1,1,24.7679,20.622c-5.6946,6.83947-30.94374,11.98012-30.94374,11.98012S81.38562,814.7099,87.08023,807.87043Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        
                                        <Path d="M339.18549,779.221c-34.87989-19.44434-56.59375-45.99121-64.53907-78.90235-5.89941-24.43554-4.2041-51.93261,5.03809-81.72754a218.88861,218.88861,0,0,1,30.439-61.48437c70.63819-99.98633,77.01368-165.1377,69.92334-202.18652-7.77392-40.623-33.03125-57.49414-33.28564-57.65967l1.09033-1.67676c.26074.16943,26.18359,17.43262,34.14453,58.87988,4.58936,23.89453,2.43018,51.14063-6.41748,80.981-11.01172,37.1377-32.48437,78.459-63.82129,122.81641a216.90415,216.90415,0,0,0-30.1626,60.92187c-15.1582,48.86719-17.30273,115.99707,58.56446,158.292Z" transform="translate(-58.29022 -40.76501)" fill="#2f2e41"/>
                                        <Path d="M275.48138,594.07935c-27.498-15.32813-26.73242-39.6211-21.248-57.30079a77.6873,77.6873,0,0,1,10.8042-21.82519c24.74658-35.02832,26.98291-57.7832,24.50146-70.7041-2.69531-14.03076-11.34131-19.791-11.42822-19.84766l1.08984-1.67676c.38428.24952,9.44824,6.28858,12.30225,21.14746,3.71631,19.34815-4.63819,43.65137-24.83154,72.23536a75.6768,75.6768,0,0,0-10.52784,21.26269c-5.26513,16.97363-6.01513,40.28711,20.31153,54.96289Z" transform="translate(-58.29022 -40.76501)" fill="#2f2e41"/>
                                        
                                        <Path d="M399.19818,372.08032l-.97363-1.74707c26.32666-14.67627,25.57666-37.98974,20.31152-54.9624a75.67919,75.67919,0,0,0-10.52783-21.26318c-20.19336-28.5835-28.54785-52.88721-24.83154-72.23536,2.854-14.85888,11.918-20.89794,12.30224-21.14746l1.09131,1.67578c-.0874.05762-8.77734,5.89356-11.44482,19.92774-2.4541,12.91357-.19336,35.64892,24.5166,70.625a77.69731,77.69731,0,0,1,10.8042,21.82471C425.9306,332.45776,426.69623,356.75073,399.19818,372.08032Z" transform="translate(-58.29022 -40.76501)" fill="#2f2e41"/>
                                        <Path d="M457.90857,272.5774a30,30,0,1,1-50.25128-32.78427c9.05312-13.87651,54.63148-28.834,54.63148-28.834S466.9617,258.70089,457.90857,272.5774Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        <Path d="M446.90857,179.5774a30,30,0,1,1-50.25128-32.78427c9.05312-13.87651,54.63148-28.834,54.63148-28.834S455.9617,165.70089,446.90857,179.5774Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        <Path d="M398.55511,520.29419a30.99912,30.99912,0,0,1-13.38086-58.98535c15.1001-7.19531,60.39063,3.33789,62.312,3.78955l1.21435.28613-.543,1.123c-.85937,1.77588-21.21777,43.58056-36.31933,50.7749h0A30.81212,30.81212,0,0,1,398.55511,520.29419Zm2.52247-59.49072c-6.14258,0-11.5254.63525-15.043,2.311A29.00036,29.00036,0,0,0,410.978,515.47778c13.1372-6.25879,31.40869-41.87744,34.82031-48.71093C440.33929,465.55444,417.874,460.80347,401.07758,460.80347Z" transform="translate(-58.29022 -40.76501)" fill="#2f2e41"/>
                                        <Path d="M337.42027,245.0522a30,30,0,1,1-40.42649,44.33621c-12.24311-11.16347-19.68934-58.552-19.68934-58.552S325.17716,233.88874,337.42027,245.0522Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        <Path d="M267.42027,371.0522a30,30,0,1,1-40.42649,44.33621c-12.24311-11.16347-19.68934-58.552-19.68934-58.552S255.17716,359.88874,267.42027,371.0522Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        <Path d="M345.88275,388.72339c-10.01318,0-29.16016-9.48193-30.03857-9.91992l-1.1167-.55664.78662-.96875c.67236-.82764,16.56543-20.29883,25.50439-22.23438h0a17.11475,17.11475,0,0,1,7.24219,33.45459A11.349,11.349,0,0,1,345.88275,388.72339Zm-28.00684-11.1582c4.71583,2.251,22.77686,10.53515,29.96192,8.978a15.11447,15.11447,0,0,0-6.39649-29.54443C334.25384,358.55493,321.23822,373.56567,317.87591,377.56519Z" transform="translate(-58.29022 -40.76501)" fill="#2f2e41"/>
                                        <Path d="M238.48965,795.58871a16.11456,16.11456,0,0,1,28.0494,15.87283c-4.38316,7.74563-28.31025,17.308-28.31025,17.308S234.10649,803.33434,238.48965,795.58871Z" transform="translate(-58.29022 -40.76501)" fill="#0000ff"/>
                                        <Path d="M186.14838,624.0022a147.9621,147.9621,0,0,1-20.60743-1.77637l-1.23193-.2002.46387-1.1582c.396-.99023,9.793-24.30176,17.75488-28.80273h0A17.11425,17.11425,0,1,1,199.374,621.8606C196.51361,623.47778,191.4765,624.0022,186.14838,624.0022Zm-19.03516-3.5625c5.1709.749,24.87549,3.29785,31.27637-.31934a15.11489,15.11489,0,0,0-14.87744-26.31543h0C177.11224,597.4231,169.13715,615.62231,167.11322,620.4397Z" transform="translate(-58.29022 -40.76501)" fill="#2f2e41"/>
                                        
                                </Svg>
                        
                        
                        </V>


                        <V style={styles.sec_con}>
                        
                        
                                <TO
                                        style={styles.text_link}
                                        onPress={() => navigate("Home")}      
                                >

                                        <T
                                                style={styles.text_link_text}
                                        >
                                                VIEW EMPLOYEES
                                        </T>
                                
                                </TO>

                        </V>


                        </V>
                </V>


        )
}

const styles = SS.create({

        main_div: {
                // backgroundColor: 'blue',
                height: 700,  
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
        },
        // image_con: {
        //         // height: 1300,
        //         flex: 1,
        //         resizeMode: "cover",
        //         width: "50%",
        //         alignItems: "center",
        // },
        IB: {
                // height: 1300,
                flex: 1,
                resizeMode: "cover",
                width: "100%",
                alignItems: "center",
        },
        svg_con: {
                flex: 2,
                // backgroundColor: 'green',
        },
        sec_con: {
                flex: 1,
                // backgroundColor: "red"
        },
        text_link: {
                color: "white", 
                backgroundColor: "blue",
                borderRadius: 5,
                paddingHorizontal: 22,
                paddingVertical: 11
        },
        text_link_text: {
                color: "white",
                paddingHorizontal: 10,
                paddingVertical: 5,
        },


})


export default Welcome;