let generateMessage = (from: string, text:string) : {from: string, text: string, createdAt: number} => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
};

let generateLocationMessage = (from: string, latitude: number, longitude: number) : {from: string, url: string, createdAt: number} => {
  return {
    from,
    url : `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt : new Date().getTime()
  }
};

export {
  generateLocationMessage,
  generateMessage
}