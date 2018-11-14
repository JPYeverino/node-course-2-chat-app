

let generateMessage = (from: string, text:string) : {from: string, text: string, createdAt: number} => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
}

export default generateMessage;