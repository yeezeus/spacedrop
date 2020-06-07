import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export default function Toolbar (props) {
  return (
    <div className='toolbar'>
      <Row className='title'>
        <Col>Spacedrop</Col>
      </Row>
      <Row className='actions'>
        <Col>
          <Button variant='dark'>
            <i className='ion-ios-send' onClick={props.onSendClick} />
          </Button>
          <Button variant='dark'>
            <i className='ion-ios-add-circle' onClick={props.onAddClick} />
          </Button>
        </Col>
        <Col>
          <Button variant='dark'>
            <i className='ion-ios-pause' onClick={props.onPauseClick} />
          </Button>
          <Button variant='dark'>
            <i className='ion-ios-close-circle' onClick={props.onCancelClick} />
          </Button>
        </Col>
      </Row>
    </div>
  )
}
