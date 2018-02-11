import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import dopY from '../images/dopY.jpg'
import dopA from '../images/dopA.jpg'
import pongT from '../images/pongT.jpg'
import pongH from '../images/pongH.jpg'
import centerB from '../images/centerB.jpg'
import centerP from '../images/centerP.jpg'
import poomH from '../images/poomH.jpg'
import teeA from '../images/teeA.jpg'
import teeI from '../images/teeI.jpg'
import de from '../images/de.jpg'
import ar from '../images/ar.jpg'
import d from '../images/d.jpg'
import p from '../images/p.jpg'
import dear from '../images/dear.jpg'
import py from '../images/py3.jpg'

// State
function mapStateToProps(state) {
  return {
    // todo: state.todo,
  }
}

// Action
const actions = {
  // myActionName: Action.myActionName,
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  static propTypes = {
    // name: PropTypes.string,
  }

  render() {
    const size = '350x350'
    const members = [
      'dop',
      'picious',
      'center',
      'chuchpong',
      'nop',
      'pond',
      'poom',
      'teeyam'
    ]
    return (
      <div className='_center'>
        <br />
        <h1>เนื่องในโอกาส อากาศมันหนาว~</h1>
        <div className='container'>
          <div className='box-item'>
            <div className='row'>
              <div className='M'>
                <img src={pongH} />
              </div>
              <div className='M'>
                <img src={dopA} />
              </div>
              <div className='M'>
                <img src={centerP} />
              </div>
              <div className='M vertical-middle'>
                <img src={py} />
              </div>
            </div>
          </div>
          <div className='box-item'>
            <div className='row'>
              <div className='M'>
                <img src={centerB} />
              </div>
              <div className='M'>
                <img src={teeI} />
              </div>
              <div className='M'>
                <img src={dear} />
              </div>
              <div className='M'>
                <img src={pongT} />
              </div>
              <div className='M'>
                <img src={poomH} />
              </div>
            </div>
          </div>
          <div className='box-item'>
            <div className='row'>
              <div className='M'>
                <img src={d} />
              </div>
              <div className='M'>
                <img src={teeA} />
              </div>
              <div className='M'>
                <img src={dopY} />
              </div>
              <div className='M'>
                <img src={de} />
              </div>
              <div className='M'>
                <img src={ar} />
              </div>
            </div>
          </div>
          <br />
          <h3>ขอให้สุขภาพแข็งแรง เจอแรงบันดาลใจในการทำงานได้ตลอดไป</h3>
          <h3>ขอบคุณจารย์ที่แบ่งปันสิ่งดีๆให้สังคมนี้ตลอดมา</h3>
          <br />
        </div>
        <div className='special-thanks'>
          <h2>Special Thanks to</h2>
          {
            members.map((member) => {
              return (<p>{member.toUpperCase()}</p>)
            })
          }
          <h4>Created By react-redux-gamo-boilerplate</h4>
        </div>
      </div>
    )
  }
}
