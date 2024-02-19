export interface IStack {
   id: number,
   text: string,
   bgColor: string,
   textColor: string
   imgSrc: string
}

export interface EnumStack extends Array<IStack>{}

type Stack = {
   id: number,
   text: string,
   bgColor: string,
   textColor: string
   imgSrc: string
}[]

export const stackData : Stack = [
   {
      id: 0,
      text: "Javascript",
      bgColor: "#f2f807",
      textColor: "#222",
      imgSrc: "icons/javascript.svg",
   },
   {
      id: 1,
      text: "NodeJS",
      bgColor: "#3c873a",
      textColor: "#222",
      imgSrc: "icons/nodeJS.svg",
   },
   {
      id: 2,
      text: "Docker",
      bgColor: "fff",
      textColor: "#008AD7",
      imgSrc: "icons/docker.svg",
   },
   {
      id: 3,
      text: "React",
      bgColor: "#222",
      textColor: "#fff",
      imgSrc: "icons/React.svg",
   },
   {
      id: 4,
      text: "C#",
      bgColor: "#815aa5",
      textColor: "#fff",
      imgSrc: "icons/c-sharp.svg",
   },
   {
      id: 5,
      text: "Python",
      bgColor: "#4b8bbe",
      textColor: "#ffd43b",
      imgSrc: "icons/python-icon.svg",
   },
   {
      id: 6,
      text: "SQL",
      bgColor: "#f29111",
      textColor: "#00758f",
      imgSrc: "icons/sql-svgrepo-com.svg",
   },
   {
      id: 7,
      text: "Express",
      bgColor: "#7b8384",
      textColor: "#fff",
      imgSrc: "icons/expressjs-icon.svg",
   },
   {
      id: 8,
      text: "Git",
      bgColor: "#fff",
      textColor: "#3d2d00",
      imgSrc: "icons/git.svg",
   },
   {
      id: 9,
      text: ".Net",
      // bgColor: "#c7c5f8",
      bgColor: "#512bd4",
      textColor: "#fff",
      imgSrc: "icons/dotnet-svgrepo-com.svg",
   },
   {
      id: 10,
      text: "MongoDB",
      bgColor: "#589636",
      textColor: "#fff",
      imgSrc: "icons/mongodb-svgrepo-com.svg",
   },
   {
      id: 11,
      text: "Azure",
      bgColor: "#fff",
      textColor: "#008AD7",
      imgSrc: "icons/azure.svg",
   },
   {
      id: 12,
      text: "AWS",
      bgColor: "#fff",
      textColor: "#e9b51c",
      imgSrc: "icons/aws.svg",
   },
   {
      id: 13,
      text: "Google Cloud",
      bgColor: "#fff",
      textColor: "#000",
      imgSrc: "icons/google-cloud.svg",
   },
   {
      id: 14,
      text: "Typescript",
      bgColor: "#fff",
      textColor: "#222",
      imgSrc: "icons/typescript.svg",
   },
   {
      id: 15,
      text: "Go",
      bgColor: "fff",
      textColor: "#1ecbe1",
      imgSrc: "icons/golang.svg",
   },
]