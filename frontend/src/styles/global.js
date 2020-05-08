import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    body {
        margin: 0px;
        padding-top: 60px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        overflow-x: hidden;
  
        font: 14px 'Roboto', sans-serif;       
       -webkit-font-smoothing: antialised !important;
    }

    .routes-container{
        display: grid;
        grid-template-columns: 8fr auto;
        grid-template-areas: 'one two';
      
        

    
    
    }

   



`;