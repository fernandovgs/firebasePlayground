import analytics from '@react-native-firebase/analytics';

export default async ({
  eventName,
  eventItem,
}) => {
  try {
    await analytics().logEvent(eventName, eventItem);
    console.log('success!');
  } catch (e) {
    console.log('unable to log event', e);
  }
};
