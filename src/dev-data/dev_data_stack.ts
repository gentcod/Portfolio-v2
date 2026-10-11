export interface IStack {
   id: number;
   text: string;
   bgColor: string;
   textColor: string;
   imgSrc: string;
}

export interface EnumStack extends Array<IStack>{}

type Stack = {
   id: number;
   text: string;
   bgColor: string;
   textColor: string;
   imgSrc: string;
}[]

export const stackData : Stack = [
   {
      id: 0,
      text: "Go",
      bgColor: "#fff",
      textColor: "#1ecbe1",
      imgSrc: "icons/golang.svg",
   },
   {
      id: 1,
      text: "Python",
      bgColor: "#4b8bbe",
      textColor: "#ffd43b",
      imgSrc: "icons/python-icon.svg",
   },
   {
      id: 2,
      text: "C#",
      bgColor: "#815aa5",
      textColor: "#fff",
      imgSrc: "icons/c-sharp.svg",
   },
   {
      id: 3,
      text: ".Net",
      bgColor: "#512bd4",
      textColor: "#fff",
      imgSrc: "icons/dotnet-svgrepo-com.svg",
   },
   {
      id: 4,
      text: "Typescript",
      bgColor: "#fff",
      textColor: "#222",
      imgSrc: "icons/typescript.svg",
   },
   {
      id: 5,
      text: "Javascript",
      bgColor: "#f2f807",
      textColor: "#222",
      imgSrc: "icons/javascript.svg",
   },
   {
      id: 6,
      text: "NodeJS",
      bgColor: "#3c873a",
      textColor: "#222",
      imgSrc: "icons/nodeJS.svg",
   },
   {
      id: 7,
      text: "gRPC",
      bgColor: "#244c5a",
      textColor: "#fff",
      imgSrc: "icons/grpc.svg",
   },
   {
      id: 8,
      text: "GraphQL",
      bgColor: "#E10098",
      textColor: "#fff",
      imgSrc: "icons/graphql.svg",
   },
   {
      id: 9,
      text: "SQL",
      bgColor: "#f29111",
      textColor: "#00758f",
      imgSrc: "icons/sql-svgrepo-com.svg",
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
      text: "Redis",
      bgColor: "#d82c20",
      textColor: "#fff",
      imgSrc: "icons/redis.svg",
   },
   {
      id: 12,
      text: "ElasticSearch",
      bgColor: "#005571",
      textColor: "#fed136",
      imgSrc: "icons/elasticsearch.svg",
   },
   {
      id: 13,
      text: "RabbitMQ",
      bgColor: "#ff6600",
      textColor: "#fff",
      imgSrc: "icons/rabbitmq.svg",
   },
   {
      id: 14,
      text: "AI",
      bgColor: "#00dc82",
      textColor: "#0c0d0e",
      imgSrc: "icons/ai.svg",
   },
   {
      id: 15,
      text: "Docker",
      bgColor: "#fff",
      textColor: "#008AD7",
      imgSrc: "icons/docker.svg",
   },
   {
      id: 16,
      text: "Kubernetes",
      bgColor: "#326ce5",
      textColor: "#fff",
      imgSrc: "icons/kubernetes-svgrepo-com.svg",
   },
   {
      id: 17,
      text: "Shell",
      bgColor: "#4eaa25",
      textColor: "#fff",
      imgSrc: "icons/shell.svg",
   },
   {
      id: 18,
      text: "Jenkins",
      bgColor: "#d33833",
      textColor: "#fff",
      imgSrc: "icons/jenkins.svg",
   },
   {
      id: 19,
      text: "AWS",
      bgColor: "#fff",
      textColor: "#e9b51c",
      imgSrc: "icons/aws.svg",
   },
   {
      id: 20,
      text: "Azure",
      bgColor: "#fff",
      textColor: "#008AD7",
      imgSrc: "icons/azure.svg",
   },
   {
      id: 21,
      text: "Google Cloud",
      bgColor: "#fff",
      textColor: "#000",
      imgSrc: "icons/google-cloud.svg",
   },
   {
      id: 22,
      text: "Git",
      bgColor: "#fff",
      textColor: "#3d2d00",
      imgSrc: "icons/git.svg",
   },
   {
      id: 23,
      text: "React",
      bgColor: "#222",
      textColor: "#fff",
      imgSrc: "icons/React.svg",
   },
];