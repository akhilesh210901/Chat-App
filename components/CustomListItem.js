import { NavigationContainer } from '@react-navigation/native';
import React from 'react' 
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar} from "react-native-elements";
import ChatScreen from '../screens/chatScreen';

const CustomListItem = ({id, chatName, enterChat}) => {

    return(
      <ListItem onPress={() => enterChat(id,chatName) } key={id} bottomDivider >
          <Avatar 
            rounded
            source = {{
                uri:"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            }}
          />
         
          <ListItem.Content>
              <ListItem.Title style = {{ fontWeight: "650" }} >
                  {chatName}
              </ListItem.Title>
             
        <ListItem.Subtitle numberOfLines={1} >
            Dept group
        </ListItem.Subtitle>
                  
              
          </ListItem.Content>

      </ListItem>
    );
};
    
  const styles = StyleSheet.create({
   
  });
  
  export default CustomListItem;