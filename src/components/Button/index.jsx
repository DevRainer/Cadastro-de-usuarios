import { Button } from './styles.js'


function DefaultButton({ children, ...props}){
    
    

    return(

        <Button{...props}>{children}</Button>
    )
}

export default DefaultButton