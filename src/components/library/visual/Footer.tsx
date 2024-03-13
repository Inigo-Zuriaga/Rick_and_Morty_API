import "./Footer.css";

interface FooterProps {
    title: string;
  }

export default function Footer({
    title
  }: FooterProps) {  
    
    return (
    <div className="Footer">
        <h3>{title}</h3>
    </div>
  );
};