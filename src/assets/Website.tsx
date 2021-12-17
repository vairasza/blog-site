type Props = {
    width: number;
    heigth: number;
    altText: string;
  };

export default function Website({ width, heigth, altText }: Props) {  
  return (
    <img
        src={"/webpage.png"}
        alt={altText} 
        width={width}
        height={heigth}
    />
  );
}