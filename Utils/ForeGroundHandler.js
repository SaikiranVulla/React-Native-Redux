import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
// foreGround Message Handling
export default ForegroundHandler = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      const {messageId, notification} = remoteMessage;
      PushNotification.localNotification({
        channelId: 'channel 1',
        messageId: messageId,
        title: notification.title,
        body: notification.body,
        soundName: 'default',
        vibrate: true,
        playSound: true,
      });
    });
    return unsubscribe;
  }, []);
  return null;
};
