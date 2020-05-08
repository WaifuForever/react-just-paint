import React, { useState } from 'react';
import { ChromePicker, CirclePicker } from 'react-color';

import './styles.css';

import pencil from '../../assets/pencil-icon.svg';
import eraser from '../../assets/eraser-icon.png';
import dog from '../../assets/dog-icon.svg';
import trash from '../../assets/trash-icon.png';
import select from '../../assets/select-icon.svg';
import brush from '../../assets/brush-icon.svg';
import undo from '../../assets/undo-icon.svg';
import line from '../../assets/line-icon.svg';
import rect from '../../assets/rect-icon.svg';
import circle from '../../assets/circle-icon.svg';
import triangle from '../../assets/triangle-icon.svg';
import download from '../../assets/download-icon.png';
import paintBucket from '../../assets/paint-bucket-icon.svg';
import zoom from '../../assets/zoom-icon.svg';
import dropper from '../../assets/dropper-icon.svg';
import hash from '../../assets/hash-icon.svg';
import save from '../../assets/save-icon.svg';
import refresh from '../../assets/refresh-icon.svg';
import drag from '../../assets/drag-icon.svg';
import newFile from '../../assets/newFile-icon.svg';
import open from '../../assets/open-icon.svg';
import move from '../../assets/move-icon.png';
import curve from '../../assets/curve-icon.svg';

import Tools from './Tools/tools';


export default function Canvas(){ 

    const SCALE = 0.3
    const OFFSET = 80

    const canvasRef = React.useRef(null);
    const width = 510+ 510 * 0.1;
    const height = 420 + 420 * 0.1;
    
    //logic
    const [stroke, setStroke] = useState(1);
    const [color, setColor] = useState('#000000');
    const [alpha, setAlpha] = useState('1');
    const [tool, setTool] = useState('pencil');

    //visual
    const [currentTool, setCurrentTool] = useState("");
    const [showColorPicker, setShowColorPicker] = useState(false);

    function draw(ctx, location) {
        ctx.fillStyle = 'deepskyblue'
        ctx.shadowColor = 'dodgerblue'
        ctx.shadowBlur = 20;
        ctx.save();
        ctx.scale(SCALE, SCALE);
        ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
        ctx.fill()
        ctx.restore()
    }
    
    function selectTool(toolName){
        setTool(toolName);

        switch(toolName){
            case Tools.Tool_Pencil:
                break;
            case Tools.Tool_Brush:
                break;
            case Tools.Tool_PaintBucket:
                break;
            case Tools.Tool_Circle:
                break;

            case Tools.Tool_Rectangle:
                break;
            case Tools.Tool_Triangle:
                break;
            case Tools.Tool_Line:
                break;                
            case Tools.Tool_Eraser:
                break;
            default:
                break;
        }
       
        console.log(tool);
    }

    function handleStrokeChange(e){
      
        setStroke(e.target.value);
        console.log(stroke)
    }

    var handleColorChange = (updatedColor) =>{
        setColor(updatedColor.hex);
        console.log(color)
    }
    
    function handleAlphaChange(e){
        
        setAlpha(e.target.value / 100);
        console.log(alpha)
    }

    function invertColor() {
        let hex = color;
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        if (!(hex[0] === '3' || hex[0] === '2' || hex[0] === '1' || hex[0] === '0'))
           
            return '#000000';

        else if(hex[0] === '3'){
            return '#000022';
        }   
        else{
            return '#ffffff'
        }
      
/*
        if (hex[0] === '9'){
            var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
                g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
                b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
           
            return '#244' + padZero(g) + padZero(b) + padZero(b);
            
        }
      
        
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
            g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
            b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return

        
           
        
        let answer = '#' + padZero(r) + padZero(g) + padZero(b);
        
        return (answer[0] === hex[0] && answer[2] === hex[2]) ? '#eeeeee' : answer;*/
    }
    
    function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    return <>  
        
        <div className="draw-container">
            <div className='toolbox left'>
                <div className="group-commands">
                    <div className="row">
                        <div className="item"  title="Undo">
                            <img src={undo} alt=""/>
                        </div>
                        <div className={tool === Tools.Tool_Dropper ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Dropper)} title="Pick Color">
                            <img src={dropper} alt=""/>
                        </div>                       

                        <div className={tool === Tools.Tool_Line ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Line)} title="Line">
                            <img src={line} alt=""/>
                        </div>                    
                    </div>      

                    <div className="row">
                        <div className={tool === Tools.Tool_Rectangle ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Rectangle)} title="Rectangle">
                            <img src={rect} alt=""/>
                        </div>

                        <div className={tool === Tools.Tool_Circle ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Circle)} title="Circle">
                            <img src={circle} alt=""/>
                        </div>

                        <div className={tool === Tools.Tool_Triangle ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Triangle)} title="Triangle">
                            <img src={triangle} alt=""/>
                        </div>
                    </div>

                    <div className="row">
                        <div className={tool === Tools.Tool_Pencil ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Pencil)} title="Pencil">
                            <img src={pencil} alt=""/>
                        </div>

                        <div className={tool === Tools.Tool_Brush ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Brush)} title="Brush">
                            <img src={brush} alt=""/>
                        </div>

                        <div className={tool === Tools.Tool_PaintBucket ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_PaintBucket)} title="Paint Bucket">
                            <img src={paintBucket} alt=""/>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className={tool === Tools.Tool_Eraser ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Eraser)} title="Eraser">
                            <img src={eraser} alt=""/>
                        </div>
                        <div className={tool === Tools.Tool_Zoom ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Zoom)} title="Zoom">
                            <img src={zoom} alt=""/>
                        </div>
                        <div className={tool === Tools.Tool_Select ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Select)} title="Select">
                            <img src={select} alt=""/>
                        </div>
                    </div>

                     <div className="row">                        
                        <div className={tool === Tools.Tool_Curve ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Curve)} title="Curve">
                            <img src={curve} alt=""/>
                        </div>
                        <div className={tool === Tools.Tool_Drag ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Drag)} title="Drag">
                            <img src={drag} alt=""/>
                        </div>
                        <div className={tool === Tools.Tool_Move ? "item-active" : "item"} onClick={() => selectTool(Tools.Tool_Move)} title="Move">
                            <img src={move} alt=""/>
                        </div>

                    </div>

                  
                </div>

              
                <div className="group-colors">                 
                    <div className="palette">
                        <CirclePicker
                            width='80%'
                            color={ color }
                            circleSpacing={ 7 }
                            circleSize={ 20 }
                            onChange={updatedColor => handleColorChange(updatedColor)}
                        />
                    </div>

                    <div className="item" title="Select Color" style={{}} >                 
                        <div  id="pick-color" style={{paddingLeft: 2}}>                            
                            <svg
                                style={{fill: invertColor(), backgroundColor: color, borderRadius: 20, border: '2px solid white'}}
                                onClick={() => setShowColorPicker(!showColorPicker)}
                                enable-background="new 0 0 000.968 511.968"
                                
                                height="30"
                                viewBox="0 0 511.968 511.968"
                                width="30"
                                xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="179.984" cy="251.964" r="20"/>
                                    <path d="m503.242 211.146c-10.494-33.231-26.22-61.491-46.776-84.132 4.515-98.617-10.197-114.144-15.106-119.319-17.395-18.336-42.395-.237-62.11 16.157-13.82 11.492-28.924 26.384-42.354 41.692-10.497-1.455-19.668-1.958-26.788-2.043 5.737-12.132-3.024-23.537-14.124-23.537-10.799 0-20.619 2.721-29.121 7.947-17.659-19.332-41.637-27.717-69.142-23.786-16.654 2.38-18.753 25.699-2.796 31.018 3.718 1.239 5.389 4.648 6.038 8.371-6.986.116-15.83.636-25.89 2.03-13.429-15.307-28.533-30.199-42.354-41.691-19.67-16.356-44.712-34.498-62.111-16.158-4.909 5.175-19.621 20.702-15.106 119.319-20.556 22.642-36.282 50.901-46.776 84.132-5.026 15.918 14.78 27.927 26.571 16.131 2.938-2.938 5.854-5.429 8.684-7.541-17.317 50.987-30.24 118.829-1.565 164.707 4.318 6.911 13.221 9.503 20.594 5.896 12.974 53.249 40.632 115.462 95.208 121.527 11.63 1.288 20.623-9.93 16.945-20.962-2.758-8.275-4.689-15.818-5.807-22.689 16.992 16.708 39.716 33.131 67.655 40.434.102.037 17.353 7.44 37.946 0 27.939-7.302 50.663-23.726 67.655-40.434-1.118 6.871-3.049 14.414-5.807 22.689-3.673 11.02 5.299 22.252 16.945 20.962 54.627-6.071 82.261-68.386 95.208-121.527 7.28 3.562 16.21 1.119 20.594-5.896 28.673-45.876 15.753-113.714-1.565-164.707 2.83 2.112 5.746 4.604 8.684 7.541 11.799 11.804 31.592-.228 26.571-16.131zm-303.258 241.813c-9.357-8.018-17.179-16.681-23.297-24.391 2.269-2.737 4.985-5.167 8.172-7.292 5.7-3.8 9.995-4.799 15.125-4.317zm80 3.005c0 9.965-6.107 18.529-14.773 22.153-3.007.726-6.086 1.294-9.227 1.708-3.141-.414-6.219-.982-9.227-1.708-8.667-3.624-14.773-12.188-14.773-22.153v-32.413c8.853.902 16.571.709 24-4.183 7.427 4.891 15.143 5.086 24 4.183zm-39.984-100.857c.037-1.029.14-1.731.232-2.175 4.05-1.342 27.454-1.342 31.504 0 .093.443.195 1.146.232 2.175-1.399 1.56-6.809 4.856-15.984 4.856s-14.585-3.296-15.984-4.856zm71.984 97.852v-36c5.13-.482 9.424.518 15.124 4.317 3.188 2.125 5.904 4.556 8.173 7.293-6.118 7.709-13.94 16.372-23.297 24.39zm140.202-111.381c-10.271-11.065-26.544-4.49-28.092 8.506-4.165 35.674-20.867 94.842-49.188 118.731 3.823-30.372-4.785-57.322-30.047-74.164-29.848-19.902-50.918-3.431-71.323-2.715-.25-.588-.488-1.346-.702-2.176 18.366-5.015 31.151-18.078 31.151-33.796 0-19.814-10.35-28.441-19.031-32.189-8.826-3.811-18.61-3.811-28.969-3.811s-20.143 0-28.969 3.811c-8.682 3.748-19.031 12.375-19.031 32.189 0 15.719 12.786 28.783 31.154 33.797-.208.815-.443 1.575-.699 2.175-20.454-.715-41.458-17.2-71.33 2.715-25.445 16.965-33.834 44.066-30.046 74.164-28.151-23.746-44.923-82.475-49.188-118.721-1.533-13.023-17.806-19.554-28.045-8.569-9.403-48.681 14.51-116.694 26.653-142.795 2.313-4.956 1.934-10.749-1.004-15.361-6.063-9.52-16.76-8.102-27.684-5.341 18.773-32.536 30.422-32.638 29.997-45.542-.807-23.349-3.188-75.129 4.281-98.531 30.653 16.693 79.189 74.695 92.37 93.823-18.896 3.669-36.772 16.603-53.259 38.585-25.019 33.357-38.225 57.454-42.819 78.129-5.409 24.344 1.277 42.563 9.309 58.626 2.803 5.607 8.453 8.849 14.323 8.849 11.769-.005 19.648-12.461 14.298-23.159-11.642-23.284-16.397-40.729 30.489-103.245 8.971-11.961 22.848-26.331 38.013-26.864 15.082-.481 25.999 12.807 24.896 11.508.181-.151 3.799 5.757 12.292 5.757 13.638 0 20.883-15.938 12.289-26.241.1-.083-8.417-9.932-21.729-16.535-3.148-11.994-11.275-23.903-22.327-37.649 8.664-.21 13.93.319 14.003.327 7.96.888 15.345-4.253 17.287-12.021 1.487-5.949 2.372-14.229 1.36-22.805 16.639 9.824 15.616 21.616 26.113 25.411 3.902 1.407 8.208 1.259 12.062-.489 4.069-1.858 5.865-4.65 7.057-6.029 3.03 9.534 9.751 17.026 19.649 15.934.094-.01 5.359-.535 14.002-.325-11.048 13.74-19.172 25.646-22.323 37.633-11.721 5.812-22.055 16.28-21.733 16.549-8.591 10.298-1.353 26.241 12.289 26.241 8.226 0 12.192-5.84 12.292-5.757-2.47 2.907 8.948-12.018 24.896-11.508 15.165.533 29.042 14.903 38.013 26.864 46.887 62.517 42.131 79.961 30.489 103.245-5.355 10.709 2.539 23.159 14.298 23.159 5.869-.001 11.521-3.242 14.323-8.849 8.031-16.063 14.718-34.282 9.309-58.626-4.595-20.675-17.801-44.771-42.819-78.129-16.486-21.982-34.363-34.916-53.259-38.585 11.666-16.929 60.927-76.7 92.37-93.823 1.814 5.686 4.385 18.056 5.146 43.543 1.502 50.261-4.131 56.704 2.419 65.238 2.692 3.51 14.188 13.586 26.712 35.292-10.95-2.768-21.626-4.17-27.684 5.341-2.938 4.612-3.316 10.405-1.004 15.361 17.158 36.841 35.069 100.217 26.7 142.847z"/><circle cx="331.984" cy="251.964" r="20"/><path d="m364.784 302.364c-29.867-39.822-91.115-27.575-108.8-23.008-17.686-4.567-78.933-16.814-108.799 23.008-18.49 24.653-24.075 56.073-18.723 77.48l.015-.004c1.736 6.959 8.01 12.123 15.507 12.123 8.836 0 16-7.164 16-16 0-3.531-7.111-27.852 12.8-54.4 20.466-27.287 77.763-10.531 78.44-10.324 3.213 1.009 6.674.927 9.545-.008.573-.179 57.792-17.164 78.415 10.332 19.938 26.584 12.8 50.828 12.8 54.4 0 8.836 7.164 16 16 16 7.497 0 13.771-5.164 15.507-12.123 1.155.299 9.094-40.41-18.707-77.476z"/>
                            </svg>                          
                        </div>
                       
                        { showColorPicker && (
                            <ChromePicker
                                className='ChromePicker'
                                disableAlpha={true}
                                color={ color }
                                
                                onChange={updatedColor => handleColorChange(updatedColor)}
                            />
                        )}
                    </div> 
                </div>                                        
            </div>        

            <div className='canvas-container'>       
                <div className="canvas-header">
                    <div className="row">
                        <div className="item" data-command="newFile" title="New File">
                            <img src={newFile} alt=""/>
                        </div>

                        <div className="item" data-command="open" title="Open">
                            <img src={open} alt=""/>
                        </div>

                        <div className="item" data-command="download" title="Download">
                            <img src={download} alt=""/>
                        </div>

                        <div className="item" data-command="save" title="Save">
                            <img src={save} alt=""/>
                        </div>

                        <div className="item" data-command="refresh" title="Last save point">
                            <img src={refresh} alt=""/>
                        </div>        
                        
                        <div className="item" data-command="grid" title="Grid">
                            <img src={hash} alt=""/>
                        </div>                      
                    </div>
                </div>
                <canvas ref={canvasRef}  width={width} height={height} onClick={e => {
                    const canvas = canvasRef.current
                    const ctx = canvas.getContext('2d')
                    draw(ctx, { x: e.clientX, y: e.clientY })
                }}/>

                
                <div className='sliders-container'>
                    <div className="stroke-container">
                        <input 
                            className='stroke-width'
                            type='range'
                            min='1'
                            max='100'
                            step="1"
                            value={stroke}
                            name='val_stroke'
                            onChange={(e) => {handleStrokeChange(e)}}
                        />

                        <span className='pointer'>{stroke}</span>
                    </div>

                    <div className="opacity-container">       
                        <input 
                            className='opacity'
                            type='range'
                            min='1'
                            max='100'
                            step="1"
                            value={alpha * 100}
                            name='val_stroke'
                            onChange={(e) => {handleAlphaChange(e)}}
                            title="Opacity"
                        />
                        <span className='pointer'>{alpha}</span>
                    </div>                      
                </div>
            </div>     

                {/*<div className={data ? "toolbox right" : "toolbox right-hide"}>*/}
            <div className="toolbox right">    
                <div className="history">

                   <h1>History</h1>
                   <div className="history-content">

                   </div>
                
                </div>
                <div className="layer-changer">
                    
                </div>       

            </div>

           
        </div>  
    </>
}