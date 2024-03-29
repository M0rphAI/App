import Link from "next/link"

type Button = {
    children: any,
    onClick?: any,
    arrow?: boolean,
    type: "primary" | "light" | "black" | "white",
    link?: any,
    className?: string,
    clientSide?: boolean,
    disabled?: boolean
}


const Arrow = (color: any) => {
    return (
        <>
            { color == "white" ?
                <svg width="18" height="12" viewBox="0 0 18 12" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 6H16.25M16.25 6L11.75 1.5M16.25 6L11.75 10.5" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg width="18" height="12" viewBox="0 0 18 12" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 6H16.25M16.25 6L11.75 1.5M16.25 6L11.75 10.5" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            
        </>
    )
}


const Button = ({
  children,
  onClick,
  arrow,
  type,
  link,
  className,
  clientSide=true,
  disabled = false
}: Button) => {
  const buttonColor = type === "primary" || type === "black" ? "white" : "black";

  if (link) {
    if (clientSide) {
      return (
        <Link href={link} className="button-link">
            <button className={`button button-${type} ${className}`} onClick={onClick} disabled={disabled}>
                {children}
                {arrow ? <Arrow color={buttonColor}/> : null}
            </button>
        </Link>
      );
    } else {
      return (
        <a href={link} className="button-link">
            <button className={`button button-${type} ${className}`} onClick={onClick} disabled={disabled}>
                {children}
                {arrow ? <Arrow color={buttonColor}/> : null}
            </button>
        </a>
      );
    }
  } else {
    return (
      <button className={`button ${className} button-${type}`} onClick={onClick} disabled={disabled}>
        {children}
        {arrow ? <Arrow color={buttonColor} /> : null}
      </button>
    );
  }
};

export default Button;