import styled from 'styled-components'

const FirstSubmitterFrame = styled.div`
display: block;
padding: 5px;
margin: 10px auto;
background: #ff7d81;
width: 500px;`


const SubmitterFrame = styled.div`
display: block;
padding: 5px;
margin: 10px auto;
background: #f9f9f9;
width: 500px;`

const Info = styled.div`
padding: 20px;
font-weight: 600;
text-align: left;
font-size: 1.5rem;
line-height: 1.5;
font-family: monospace;`

const Input = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 3px;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
`
const Textarea = styled.textarea`
    height: 80px;
    width: 100%;
    border-radius: 3px;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
`
const Checkboxstyled = styled.label`
width: 50%;
margin: 25px auto;` 

const FooterStyle = styled.footer`
position: relative;
font-size: 1rem;
background-color: #444;
display: block;
width: 100%;
height: 270px;
margin-top: 40px;

`
const FooterInner = styled.div`
color: #ffffff;
display: block;
position: relative;
padding: 80px 0;

`

export {FirstSubmitterFrame, SubmitterFrame, Info, Input, Textarea, Checkboxstyled, FooterStyle, FooterInner}
