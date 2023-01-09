import React from 'react';
import {  Row, Col } from "react-bootstrap";
import './side_menu.css';

function side_menu() {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
        console.log(event);
      };


    return (
       
        <Row>
          <Col md={12}>
          <aside className='s_m_1'>
               <p className='s_m_1p'>Messages</p>
                 
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'send_sms')} draggable>
                    SMS Send
                </div>
               
               <p className='s_m_1p'>Voice</p>
                 
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'call_start')} draggable>
                    Call Start
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'ivr_menu')} draggable>
                    IVR Menu
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'get_input')} draggable>
                    GET Input
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'call_forwarding')} draggable>
                Call Forwarding
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'paly_aduio')} draggable>
                   Play Aduio
                </div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'recard_auio')} draggable>
                   Recard Aduio
                </div>
                
                </aside>
          </Col>
       </Row>
       
    );
  }
  
  export default side_menu;