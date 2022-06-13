import { Platform } from "react-native";

export const createFormData = (listing) => {
  // const data = new FormData();

  // data.append('photo', {
  //   name: photo.fileName,
  //   type: photo.type,
  //   uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  // });

  // Object.keys(body).forEach((key) => {
  //   data.append(key, body[key]);
  // });

  // return data;
  var data = new FormData();
  let typeImg = (listing.uri).slice(-3)
  // console.log(typeImg);
  data.append('file', {
    // @ts-ignore 
    uri: listing.uri, // Don't replace the file with ''..
    name: 'wrawrawr.jpg',
    type: 'image/' + typeImg,
  })
  // data.append('description', 'listing.desc')

  return data;
};