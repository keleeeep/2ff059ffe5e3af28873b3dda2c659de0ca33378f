import React, { Component } from "react";
import { ListGroup,Badge,Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faMapMarkerAlt,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

class Header extends Component {

    state = {
        setModalShow:false,
        char:0
    }

    show = () => {
        this.setState({ setModalShow: true });
    }

    hide = () => {
        this.setState({ setModalShow: false });
    }

    handleWordCount = () => this.setState({char : this.state.char + 1});

    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faArrowLeft} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Navbar.Text onClick={()=>this.show()}>
                                <p className="header-subtext font-weight-light">Alamat Pemesanan </p>
                                <p className="header-text font-weight-bold">Tokopedia Tower <FontAwesomeIcon className="ml-1 color-1" icon={faChevronDown} /></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

                <Rodal visible={this.state.setModalShow} onClose={()=>this.hide()} width={370} height={500}>
                        <div><p className="mt-4 fs-20 font-weight-bolder">Cek makanan yang tersedia di lokasi kamu!</p></div>
                        <div className="form-group mt-2">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="pin-map-active color-1"/></div>
                                </div>
                                <input type="text" className="form-control form-location" id="inlineFormInputGroupUsername"
                                       placeholder="Pilih Lokasi" onChange={this.handleWordCount}/>
                            </div>
                            <div className="row mt-3" id="address" hidden={this.state.char >= 3 ? false : true}>
                                <div className="col-2 col-md-2">
                                    <ListGroup className="mt-2">
                                        <ListGroup.Item className="border-0 h-70 pl-8"><Badge variant="secondary" className="border-radius-100"><FontAwesomeIcon icon={faMapMarkerAlt} className="pin-map-deactive"/></Badge></ListGroup.Item>
                                        <ListGroup.Item className="border-0 h-70 pl-8"><Badge variant="secondary" className="border-radius-100"><FontAwesomeIcon icon={faMapMarkerAlt} className="pin-map-deactive"/></Badge></ListGroup.Item>
                                        <ListGroup.Item className="border-0 h-70 pl-8"><Badge variant="secondary" className="border-radius-100"><FontAwesomeIcon icon={faMapMarkerAlt} className="pin-map-deactive"/></Badge></ListGroup.Item>
                                        <ListGroup.Item className="border-0 h-70 pl-8"><Badge variant="secondary" className="border-radius-100"><FontAwesomeIcon icon={faMapMarkerAlt} className="pin-map-deactive"/></Badge></ListGroup.Item>
                                    </ListGroup>
                                </div>
                                <div className="col-10 col-md-10 pl-0">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="h-70 pl-0">Kulina <br/> <span className="text-muted">Jalan Kelapa Dua</span></ListGroup.Item>
                                        <ListGroup.Item className="h-70 pl-0">Pancoran <br/> <span className="text-muted">Jalan Pama'an</span></ListGroup.Item>
                                        <ListGroup.Item className="h-70 pl-0">Tulodong <br/> <span className="text-muted">Jalan Putra Dharma</span></ListGroup.Item>
                                        <ListGroup.Item className="h-70 pl-0">Blok 71 <br/> <span className="text-muted">Jalan Pancasila</span></ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                </Rodal>
            </React.Fragment>
        );
    }
}

export default Header;