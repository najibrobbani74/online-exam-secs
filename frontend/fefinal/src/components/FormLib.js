import {useState} from 'react';
import { useField } from "formik";
import{
        StyledInput,
        StyledForm,
        StyledFormda,
        StyledFormBtn,
        StyledRegBtn,
        Wave,
        StyledLabel,StyledTitle,colors,Avatar,Bgr,
        TextLink,
    ButtonGroup,
    ExtraText,
    ErrorMsg,   
    StyledIcon,
    StyledImg,
    StyledRadio
    
    
}from "./../components/Styles";

//eye for password
import {FiEyeOff, FiEye} from 'react-icons/fi';
import Logo from './../assets/favicon.png';


export const TextInput = ({onChange, icon, ...props}) => {

    const [field, meta] = useField(props);
    const {value, ...rest} = field;
    const [show, setShow] = useState(false);
    
    return(

        <div style={{position : "relative"}}>
            <StyledLabel htmlFor={props.name}>{props.label}
            </StyledLabel>
            {props.type !== "password" &&  
            <StyledInput 
            invalid={meta.touched && meta.error} 
            {...field} {...props}/>}

            {props.type === "password" && (
                    <StyledInput 
                    invalid={meta.touched && meta.error}
                    {...field} 
                    {...props}            
                    type={show ? "text" : "password"}
                    />

                )}

           

                

            <StyledIcon>{icon}</StyledIcon>
            {
                props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>

                    {show && <FiEye/>}
                    {!show &&<FiEyeOff/>}

                </StyledIcon>
            )
            }
            {meta.touched && meta.error? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
            )}
        </div>
        
    );

    
    
};





