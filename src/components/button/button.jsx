

const Button= (props)=> {

    const {onClick,  children= 'default'} = props;
    
return <button onClick={onClick} >{children}</button>

}

export default Button;